-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le :  mer. 01 juil. 2020 à 15:30
-- Version du serveur :  10.4.10-MariaDB
-- Version de PHP :  7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `gite`
--

-- --------------------------------------------------------

--
-- Structure de la table `chambres`
--

DROP TABLE IF EXISTS `chambres`;
CREATE TABLE IF NOT EXISTS `chambres` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(20) NOT NULL,
  `tarif` int(4) NOT NULL,
  `nbPersonnes` int(2) NOT NULL,
  `taille` int(4) NOT NULL,
  `lits` varchar(50) NOT NULL,
  `infos1` varchar(255) NOT NULL,
  `infos2` text NOT NULL,
  `clim` tinyint(1) NOT NULL,
  `wifi` tinyint(1) NOT NULL,
  `television` tinyint(1) NOT NULL,
  `coffre` tinyint(1) NOT NULL,
  `bar` tinyint(1) NOT NULL,
  `tel` tinyint(1) NOT NULL,
  `cuisine` tinyint(1) NOT NULL,
  `serviettes` tinyint(1) NOT NULL,
  `baignoire` tinyint(1) NOT NULL,
  `bureau` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `chambres`
--

INSERT INTO `chambres` (`id`, `nom`, `tarif`, `nbPersonnes`, `taille`, `lits`, `infos1`, `infos2`, `clim`, `wifi`, `television`, `coffre`, `bar`, `tel`, `cuisine`, `serviettes`, `baignoire`, `bureau`) VALUES
(1, 'Suite junior', 250, 2, 260, '2 lits doubles', 'Notre suite junior vous offre une vue imprenable sur la ville.', 'Le luxe, accessible à tous. Une suite junior est l\'option idéale pour un séjour luxueux à un prix compétitif. Les suites junior sont des chambres spacieuses de 100 mètres carrés qui vous permettront de passer un agréable séjour et de profiter d\'une vue imprenable sur la ville.', 1, 1, 1, 0, 0, 1, 1, 1, 0, 0),
(2, 'Chambre standard', 150, 1, 230, '1 lit double', 'Notre chambre standard associe confort et modernité dans un cadre chaleureux.', 'Pratique et confortable. Profitez de l\'une de nos chambres standard de 20 mètres carrés, entièrement équipées. Chaleureuses et modernes, ces chambres vous proposent une vue agréable du parc de l\'hôtel et sont équipées pour votre confort. Idéales pour les touristes et voyages d\'affaires.', 1, 1, 1, 0, 0, 1, 1, 0, 0, 0),
(3, 'Chambre supérieure', 350, 2, 280, '1 lit King Size', 'Notre chambre supérieure est spacieuse, élégante et parfaitement équipée.', 'L\'élégance en toute simplicité. Venez profiter d\'une chambre spacieuse, confortable et chaleureuse, pour une ou deux personnes. Cette chambre élégante de 30 mètres carrés possède un bureau, un coin salon et vous offre une vue du jardin de l\'hôtel. N’hésitez pas : vous pouvez choisir la configuration de cette chambre sur demande, au moment de la réservation:', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `clients`
--

DROP TABLE IF EXISTS `clients`;
CREATE TABLE IF NOT EXISTS `clients` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `tel` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `clients`
--

INSERT INTO `clients` (`id`, `nom`, `prenom`, `email`, `tel`) VALUES
(1, 'Client1', 'prenom1', 'prenom1.nom1@gmail.com', '0612345678'),
(2, 'Client2', 'prenom2', 'prenom2.nom2@gmail.com', '0687654321'),
(3, 'Client3', 'prenom3', 'prenom3.nom3@gmail.com', '0612365487'),
(4, 'Client4', 'prenom4', 'prenom4.nom4@gmail.com', '0665321478');

-- --------------------------------------------------------

--
-- Structure de la table `entreprise`
--

DROP TABLE IF EXISTS `entreprise`;
CREATE TABLE IF NOT EXISTS `entreprise` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  `adresse` varchar(255) NOT NULL,
  `cp` varchar(20) NOT NULL,
  `ville` varchar(50) NOT NULL,
  `pays` varchar(50) NOT NULL,
  `mail` varchar(50) NOT NULL,
  `tel` varchar(20) NOT NULL,
  `fax` varchar(20) DEFAULT NULL,
  `conditions` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `about` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `entreprise`
--

INSERT INTO `entreprise` (`id`, `nom`, `adresse`, `cp`, `ville`, `pays`, `mail`, `tel`, `fax`, `conditions`, `description`, `about`) VALUES
(1, 'Chambres d\'Hôtes', '15, rue du Chateau', '75001', 'Paris', 'France', 'info@monsite.fr', '0123456789', '0123456789', '', NULL, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `factures`
--

DROP TABLE IF EXISTS `factures`;
CREATE TABLE IF NOT EXISTS `factures` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `idEntreprise` int(11) NOT NULL,
  `idClient` int(11) NOT NULL,
  `montantDu` decimal(10,0) NOT NULL,
  `montantPercu` decimal(10,0) NOT NULL,
  `tva` decimal(10,0) NOT NULL,
  `idTypeRegl` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idTypeRegl` (`idTypeRegl`),
  KEY `idClient` (`idClient`),
  KEY `idEntreprise` (`idEntreprise`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `factures`
--

INSERT INTO `factures` (`id`, `date`, `idEntreprise`, `idClient`, `montantDu`, `montantPercu`, `tva`, `idTypeRegl`) VALUES
(1, '2020-06-30', 1, 1, '250', '0', '1', 1);

-- --------------------------------------------------------

--
-- Structure de la table `images`
--

DROP TABLE IF EXISTS `images`;
CREATE TABLE IF NOT EXISTS `images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image` varchar(255) NOT NULL,
  `commentaire` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `images`
--

INSERT INTO `images` (`id`, `image`, `commentaire`) VALUES
(1, 'images/chambre standard/chevet.jpg', ''),
(2, 'images/chambre standard/sdb.jpg', ''),
(3, 'images/chambre standard/tv.jpg', ''),
(4, 'images/commun/serviettes2.jpg', ''),
(5, 'images/commun/serviettes2.jpg', '');

-- --------------------------------------------------------

--
-- Structure de la table `images-chambres`
--

DROP TABLE IF EXISTS `images-chambres`;
CREATE TABLE IF NOT EXISTS `images-chambres` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idImage` int(11) NOT NULL,
  `idChambre` int(11) DEFAULT NULL,
  `idEntreprise` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idImage` (`idImage`),
  KEY `idChambre` (`idChambre`),
  KEY `idEntreprise` (`idEntreprise`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `reglements`
--

DROP TABLE IF EXISTS `reglements`;
CREATE TABLE IF NOT EXISTS `reglements` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `typeRegl` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `reglements`
--

INSERT INTO `reglements` (`id`, `typeRegl`) VALUES
(1, 'cb'),
(2, 'virement'),
(3, 'cheque_bancaire'),
(4, 'cheque_voyage'),
(5, 'especes'),
(6, 'autre');

-- --------------------------------------------------------

--
-- Structure de la table `sejours`
--

DROP TABLE IF EXISTS `sejours`;
CREATE TABLE IF NOT EXISTS `sejours` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dateArrivee` date NOT NULL,
  `dateDepart` date NOT NULL,
  `nbAdultes` int(2) NOT NULL,
  `nbEnfants` int(2) NOT NULL DEFAULT 0,
  `idClient` int(11) NOT NULL,
  `idChambre` int(11) NOT NULL,
  `idFacture` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idChambre` (`idChambre`),
  KEY `idFacture` (`idFacture`),
  KEY `idClient` (`idClient`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `sejours`
--

INSERT INTO `sejours` (`id`, `dateArrivee`, `dateDepart`, `nbAdultes`, `nbEnfants`, `idClient`, `idChambre`, `idFacture`) VALUES
(3, '2020-06-01', '2020-06-07', 2, 0, 1, 2, NULL),
(4, '2020-06-15', '2020-06-21', 2, 2, 2, 3, NULL);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `factures`
--
ALTER TABLE `factures`
  ADD CONSTRAINT `factures_ibfk_1` FOREIGN KEY (`idTypeRegl`) REFERENCES `reglements` (`id`),
  ADD CONSTRAINT `factures_ibfk_2` FOREIGN KEY (`idClient`) REFERENCES `clients` (`id`),
  ADD CONSTRAINT `factures_ibfk_3` FOREIGN KEY (`idEntreprise`) REFERENCES `entreprise` (`id`);

--
-- Contraintes pour la table `images-chambres`
--
ALTER TABLE `images-chambres`
  ADD CONSTRAINT `images-chambres_ibfk_1` FOREIGN KEY (`idImage`) REFERENCES `images` (`id`),
  ADD CONSTRAINT `images-chambres_ibfk_2` FOREIGN KEY (`idChambre`) REFERENCES `chambres` (`id`),
  ADD CONSTRAINT `images-chambres_ibfk_3` FOREIGN KEY (`idEntreprise`) REFERENCES `entreprise` (`id`);

--
-- Contraintes pour la table `sejours`
--
ALTER TABLE `sejours`
  ADD CONSTRAINT `sejours_ibfk_1` FOREIGN KEY (`idChambre`) REFERENCES `chambres` (`id`),
  ADD CONSTRAINT `sejours_ibfk_2` FOREIGN KEY (`idClient`) REFERENCES `clients` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
