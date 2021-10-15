import ApiError from '../error/ApiError.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const generateJwt = (id, login, role) => {
    return jwt.sign(
        { id, login, role },
        process.env.SECRET_KEY,
        { expiresIn: '24h' }
    )
}

class UserController {
    async registration(req, res, next) {
        const data = req.body;
        if (!data.login || !data.password) {
            return next(ApiError.badRequest('Некорректный email или password'));
        }
        const candidate = await User.findOne({ login: data.login });
        if (candidate) {
            return next(ApiError.badRequest('Логин занят'));
        }
        const checkcandidate = await User.findOne({ email: data.email });
        if (checkcandidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'));
        }
        const hashPassword = await bcrypt.hash(data.password, 5);
        const user = await User.create({ ...data, password: hashPassword });
        const token = generateJwt(user.id, user.login, user.role);
        return res.json({ token })
    }
    async login(req, res, next) {
        const { login, password } = req.body;
        const user = await User.findOne({ login: login });
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'));
        }
        let comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'));
        }
        const token = generateJwt(user.id, user.login, user.role);
        return res.json({ token });
    }
    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.login, req.user.role);
        res.json({ token });
    }
}

export default new UserController();