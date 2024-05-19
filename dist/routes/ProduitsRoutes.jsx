"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getProduits_1 = require("../controllers/produits/getProduits");
const getProduit_1 = require("../controllers/produits/getProduit");
const createProduit_1 = require("../controllers/produits/createProduit");
const updateProduit_1 = require("../controllers/produits/updateProduit");
const deleteProduit_1 = require("../controllers/produits/deleteProduit");
const router = express_1.default.Router();
/**
 * @swagger
 * /produits:
 *   get:
 *     summary: Récupérer tous les produits
 *     responses:
 *       200:
 *         description: Liste des produits
 */
router.get('/', getProduits_1.getProduits);
/**
 * @swagger
 * /produits/{id}:
 *   get:
 *     summary: Récupérer un produit par son identifiant
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Identifiant du produit
 *     responses:
 *       200:
 *         description: Produit trouvé
 *       404:
 *         description: Produit non trouvé
 */
router.get('/:id', getProduit_1.getProduit);
/**
 * @swagger
 * /produits:
 *   post:
 *     summary: Créer un nouveau produit
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Produit'
 *     responses:
 *       201:
 *         description: Produit créé avec succès
 *       400:
 *         description: Données invalides
 */
router.post('/', createProduit_1.createProduit);
/**
 * @swagger
 * /produits/{id}:
 *   put:
 *     summary: Mettre à jour un produit
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Identifiant du produit
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Produit'
 *     responses:
 *       200:
 *         description: Produit mis à jour avec succès
 *       400:
 *         description: Données invalides
 *       404:
 *         description: Produit non trouvé
 */
router.put('/:id', updateProduit_1.updateProduit);
/**
 * @swagger
 * /produits/{id}:
 *   delete:
 *     summary: Supprimer un produit
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Identifiant du produit
 *     responses:
 *       200:
 *         description: Produit supprimé avec succès
 *       404:
 *         description: Produit non trouvé
 */
router.delete('/:id', deleteProduit_1.deleteProduit);
exports.default = router;
