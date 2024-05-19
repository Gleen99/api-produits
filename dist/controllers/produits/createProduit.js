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
exports.createProduit = void 0;
const ProduitsModels_1 = __importDefault(require("../../models/produits/ProduitsModels"));
// Créer un nouveau produit
const createProduit = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const produitData = req.body;
    // Vérification de la présence des données requises
    if (!produitData.nom || !produitData.description || !produitData.prix || !produitData.categorie) {
        res.status(400).json({ message: 'Tous les champs requis doivent être fournis' });
        return; // Arrêter l'exécution de la fonction si des données requises sont manquantes
    }
    const produit = new ProduitsModels_1.default(produitData);
    try {
        const newProduit = yield produit.save();
        res.status(201).json(newProduit);
    }
    catch (err) {
        // Vérification de l'instance de l'erreur pour TypeScript
        if (err instanceof Error) {
            res.status(400).json({ message: err.message });
        }
        else {
            res.status(500).json({ message: 'Erreur inconnue' });
        }
    }
});
exports.createProduit = createProduit;
