import User from "../models/userModel.js";

const userController = {
    createUser: async (req, res) => {
        const { nome, idade, pais } = req.body;
        const user = new User({
            nome,
            idade,
            pais
        });
        try {
            const newUser = await user.save();
            res.status(201).json(newUser);
        } catch (err) {
            res.status(400).json({ mensagem: err.message });
        }
    },

    getAllUsers: async (req, res) => {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            res.status(500).json({ mensagem: err.message })
        }
    },

    getUserbyId: async (req, res) => {
        const id = req.params.id;
        try {
            const user = await User.findById(id);
            if (!user) {
                return res.status(404).json({ mensagem: "Usuário Não encontrado" });
            } else {
                res.json(user);
            }
        } catch (err) {
            res.status(500).json({ mensagem: err.message });
        }
    },

    updateUser: async (req, res) => {
        const id = req.params.id;
        const { nome, idade, pais } = req.body;
        try {
            const updatedUser = await User.findByIdAndUpdate(
                id,
                { nome, idade, pais },
                { new: true }
            );
            res.json(updatedUser);
        } catch (err) {
            res.status(400).json({ mensagem: err.message });
        }
    },

    deleteUser: async (req, res) => {
        const id = req.params.id;
        try {
            const deletedUser = await User.findByIdAndRemove(id);
            if (!deletedUser) {
                return res.status(404).json({ mensagem: "Usuário Não Encontrado" });
            } else {
                res.json({ mensagem: "Usuário deletado com Sucesso" });
            }
        } catch (err) {
            return res.status(500).json({ mensagem: err.message });
        }
    },
};

export default userController;
