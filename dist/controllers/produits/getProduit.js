"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProduit = void 0;
const ProduitsModels_1 = __importDefault(require("../../models/produits/ProduitsModels"));
const getProduit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    // Vérification de la présence de l'ID
    if (!id) {
        res.status(400).json({ message: 'ID du produit requis' });
        return; // Arrêter l'exécution de la fonction si des données requises sont manquantes
    }
    try {
        const produit = yield ProduitsModels_1.default.findById(id);
        // Vérification si le produit est trouvé
        if (!produit) {
            res.status(404).json({ message: 'Produit non trouvé' });
            return;
        }
        res.status(200).json(produit);
    }
    catch (err) {
        // Vérification de l'instance de l'erreur pour TypeScript
        if (err instanceof Error) {
            res.status(500).json({ message: err.message });
        }
        else {
            res.status(500).json({ message: 'Erreur inconnue' });
        }
    }
});
exports.getProduit = getProduit;
