import { PuzzleImport } from './App';

/**
 *  � - &eacute; or \u00E9
    � - &egrave; or \u00E8
    � - &ecirc; or \u00EA
    � - &agrave; or \u00E0
    � - &acirc; or \u00E2
    � - &icirc; or \u00EE
    � - &ocirc; or \u00F4
    � - &ucirc; or \u00FB
    � - &ccedil; or \u00E7
    � - &euml; or \u00EB
    � - &iuml; or \u00EF
    � - &uuml; or \u00FC
    � - &oelig; or \u0153
    � - &aelig; or \u00E6
    � - &laquo; or \u00AB
    � - &raquo; or \u00BB
    � - or \u00B7
    � - &ugrave; \u00F9
*/


export const all_puzzles : PuzzleImport[] = [
{
    puzzle_name: '8 juin 2026 - Océan d\'archives',
	puzzle_date: new Date('2026-06-08'),
    groups: [
        {
            category: 'Sert à boire',
            items: ['Garçon', 'Serveur', 'Barman', 'Steward'],
            difficulty: 1,
        },
        {
            category: 'Membre de la communauté de l\'anneau',
            items: ['Homme', 'Nain', 'Elfe', 'Hobbit'],
            difficulty: 2,
        },
        {
            category: 'Peuvent subir une discrimination',
            items: ['Femme', 'Noir', 'Homosexuel', 'Sourd'],
            difficulty: 3,
        },
        {
            category: '_ de joie',
            items: ['Fille', 'Feu', 'Cri', 'Fou'],
            difficulty: 4,
        }
    ]
},
{
    puzzle_name: '1 juin 2026 - Lait de bicyclette',
	puzzle_date: new Date('2026-06-01'),
    groups: [
        {
            category: 'Plan',
            items: ['Patron', 'Maquette', 'Modèle', 'Schéma'],
            difficulty: 1,
        },
        {
            category: 'Du latin "caput", tête',
            items: ['Chef', 'Cap', 'Occiput', 'Capital'],
            difficulty: 2,
        },
        {
            category: '>',
            items: ['Supérieur', 'Guillemet', 'Droite', 'Suivant'],
            difficulty: 3,
        },
        {
            category: 'Homophones de verbes du 3e groupe',
            items: ['Maître', 'Fer', 'Voire', 'Hêtre'],
            difficulty: 4,
        }
    ]
},
{
    puzzle_name: '25 mai 2026 - Thyroïde de geek',
	puzzle_date: new Date('2026-05-25'),
    groups: [
        {
            category: 'Jaune',
            items: ['Blond', 'Doré', 'Tournesol', 'Moutarde'],
            difficulty: 1,
        },
        {
            category: 'Fait avec de la farine',
            items: ['Roux', 'Crêpe', 'Panure', 'Pain'],
            difficulty: 2,
        },
        {
            category: 'Ours _',
            items: ['Brun', 'Blanc', 'Malais', 'A lunettes'],
            difficulty: 3,
        },
        {
            category: 'Commence par un nom d\'animal',
            items: ['Chatain', 'Coquet', 'Pourri', 'Chevalier'],
            difficulty: 4,
        }
    ]
},
{
    puzzle_name: '18 mai 2026 - Musées migrateurs',
	puzzle_date: new Date('2026-05-18'),
    groups: [
        {
            category: 'Ecrit',
            items: ['Texte', 'Message', 'Document', 'Papier'],
            difficulty: 1,
        },
        {
            category: 'Analogie',
            items: ['Image', 'Illustration', 'Exemple', 'Métaphore'],
            difficulty: 2,
        },
        {
            category: 'Jeux _',
            items: ['Vidéo', 'Olympiques', 'Interdits', 'Concours'],
            difficulty: 3,
        },
        {
            category: 'Marques de voitures avec une lettre en plus',
            items: ['Audio', 'Fjord', 'Minai', 'Seant'],
            difficulty: 4,
        }
    ]
},
{
    puzzle_name: '11 mai 2026 - Lumière et infirmières',
	puzzle_date: new Date('2026-05-11'),
    groups: [
        {
            category: 'Eau en suspension',
            items: ['Vapeur', 'Nuage', 'Brume', 'Gaz'],
            difficulty: 1,
        },
        {
            category: 'Dessert au chocolat',
            items: ['Glace', 'Truffe', 'Fondant', 'Mousse'],
            difficulty: 2,
        },
        {
            category: 'Pistolet à _',
            items: ['Eau', 'Colle', 'Air comprimé', 'Bille'],
            difficulty: 3,
        },
        {
            category: 'Derniers mots de classiques Disney',
            items: ['Neige', 'Sirène', 'Lion', 'Bête'],
            difficulty: 4,
        }
    ]
},
{
    puzzle_name: '4 mai 2026 - Hygiène des mains de pompiers',
	puzzle_date: new Date('2026-05-04'),
    groups: [
        {
            category: 'Similaire',
            items: ['Identique', 'Pareil', 'Semblable', 'Equivalent'],
            difficulty: 1,
        },
        {
            category: 'Travail d\'élève',
            items: ['Copie', 'Devoir', 'Exposé', 'Projet'],
            difficulty: 2,
        },
        {
            category: 'Mots latins',
            items: ['Idem', 'Recto', 'Ultimatum', 'Incognito'],
            difficulty: 3,
        },
        {
            category: 'Tout de _',
            items: ['Même', 'Suite', 'Go', 'Travers'],
            difficulty: 4,
        }
    ]
},
{
    puzzle_name: '27 avril 2026 - Morses guides d\'aveugles',
	puzzle_date: new Date('2026-04-27'),
    groups: [
        {
            category: 'Ramolli',
            items: ['Détendu', 'Lâche', 'Mou', 'Flasque'],
            difficulty: 1,
        },
        {
            category: 'Types de fauteuil',
            items: ['Relax', 'Bergère', 'Club', 'Crapaud'],
            difficulty: 2,
        },
        {
		    category: 'Père _',
            items: ['Tranquille', 'Noël', 'Fouettard', 'Castor'],
            difficulty: 3,
        },
        {
            category: 'Parties du corps à l\'envers',
            items: ['Zen', 'Nies', 'Nier', 'Siri'],
            difficulty: 4,
        }
    ]
},
{
    puzzle_name: '20 avril 2026 - Adjoint administratif du manchot',
	puzzle_date: new Date('2026-04-20'),
    groups: [
        {
            category: 'Visage',
            items: ['Poire', 'Tronche', 'Face', 'Figure'],
            difficulty: 1,
        },
        {
            category: 'Activités de rivière',
            items: ['Pêche', 'Baignade', 'Canoë', 'Canyoning'],
            difficulty: 2,
        },
        {
            category: 'Cris d\'animaux, phonétiquement',
            items: ['Coing', 'Meut', 'Quoi', 'Baie'],
            difficulty: 3,
        },
        {
            category: 'Logos des principaux OS',
            items: ['Pomme', 'Fenêtres', 'Pingouin', 'Robot'],
            difficulty: 4,
        }
    ]
},
{
    puzzle_name: '13 avril 2026 - Cirque au Scrabble',
	puzzle_date: new Date('2026-04-13'),
    groups: [
        {
            category: 'Extensions de fichier',
            items: ['MP3', 'GIF', 'PDF', 'ZIP'],
            difficulty: 1,
        },
        {
            category: 'Mots en phonétique',
            items: ['K7', 'DCD', 'OQP', 'DS'],
            difficulty: 2,
        },
        {
            category: 'Lettres qui se suivent',
            items: ['CD', 'UV', 'PQ', 'VW'],
            difficulty: 3,
        },
        {
            category: 'Ont un menu',
            items: ['DVD', 'McDo', 'PC', 'RU'],
            difficulty: 4,
        }
    ]
},
{
    puzzle_name: '6 avril 2026 - Ambulanciers licornes',
	puzzle_date: new Date('2026-04-06'),
    groups: [
        {
            category: 'Au self',
            items: ['Plateau', 'Assiette', 'Carafe', 'Buffet'],
            difficulty: 1,
        },
        {
            category: 'Travaillent au collège',
            items: ['Pion', 'Principal', 'Prof', 'Cuisinier'],
            difficulty: 2,
        },
        {
            category: 'Lettres, phonétiquement',
            items: ['Dé', 'Hache', 'Aime', 'Cas'],
            difficulty: 3,
        },
        {
            category: 'Faux _',
            items: ['Jeton', 'Frère', 'Ami', 'Départ'],
            difficulty: 4,
        }
    ]
},
{
    puzzle_name: '30 mars 2026 - Sauvegarde des blagues informatiques',
	puzzle_date: new Date('2026-03-30'),
    groups: [
        {
            category: 'Matières',
            items: ['Verre', 'Vair', 'Ouate', 'Bois'],
            difficulty: 1,
        },
        {
            category: 'Prépositions de lieu',
            items: ['Vers', 'Au', 'Sous', 'Dans'],
            difficulty: 2,
        },
        {
            category: 'La fin des saisons',
            items: ['Ver', 'Temps', 'Té', 'Omne'],
            difficulty: 3,
        },
        {
            category: 'Feu _',
            items: ['Vert', 'Follet', 'Stop', 'Electrique'],
            difficulty: 4,
        }
    ]
},
{
    puzzle_name: '23 mars 2026 - Glace artisanale à la tuberculose',
	puzzle_date: new Date('2026-03-23'),
    groups: [
        {
            category: 'Vêtement de travail',
            items: ['Bleu', 'Salopette', 'Uniforme', 'Blouse'],
            difficulty: 1,
        },
        {
            category: 'ça pique',
            items: ['Rose', 'Epingle', 'Barbe', 'Seringue'],
            difficulty: 2,
        },
        {
            category: 'Communiste',
            items: ['Rouge', 'Coco', 'Bolchevik', 'Trotskiste'],
            difficulty: 3,
        },
        {
            category: 'Rires',
            items: ['Jaune', 'Fou', 'Sarcastique', 'Nerveux'],
            difficulty: 4,
        }
    ]
},
{
    puzzle_name: '16 mars 2026 - Ti\'punch',
	puzzle_date: new Date('2026-03-16'),
    groups: [
        {
            category: 'Camarade',
            items: ['Ami', 'Copain', 'Partenaire', 'Compagnon'],
            difficulty: 1,
        },
        {
            category: 'Satellites de planètes',
            items: ['Lune', 'Europe', 'Titan', 'Ariel'],
            difficulty: 2,
        },
        {
            category: 'Personnages de la commedia dell\'arte',
            items: ['Pierrot', 'Arlequin', 'Colombine', 'Polichinelle'],
            difficulty: 3,
        },
        {
            category: 'Prénoms féminins sans le e final',
            items: ['Clair', 'Mari', 'Jasmin', 'Colin'],
            difficulty: 4,
        }
    ]
},
{
    puzzle_name: '9 mars 2026 - On reste en pyjama',
	puzzle_date: new Date('2026-03-09'),
    groups: [
        {
            category: 'Ivre',
            items: ['Rond', 'Torché', 'Gris', 'Saoul'],
            difficulty: 1,
        },
        {
            category: 'Bien fait',
            items: ['Carré', 'Solide', 'Propre', 'Joli'],
            difficulty: 2,
        },
        {
            category: 'Types de triangles',
            items: ['Rectangle', 'Isocèle', 'Equilatéral', 'Quelconque'],
            difficulty: 3,
        },
        {
            category: 'Caractéristiques d\'un panneau de danger',
            items: ['Triangle', 'Rouge', 'Point d\'exclamation', 'Clignotement'],
            difficulty: 4,
        }
    ]
},
{
    puzzle_name: '2 mars 2026 - Livres',
	puzzle_date: new Date('2026-03-02'),
    groups: [
        {
            category: 'Sa majesté',
            items: ['Roi', 'Monarque', 'Souverain', 'Altesse'],
            difficulty: 1,
        },
        {
            category: 'Excelle',
            items: ['As', 'Champion', 'Chef', 'Virtuose'],
            difficulty: 2,
        },
        {
            category: 'Interjections',
            items: ['Dame', 'Parbleu', 'Seigneur', 'Oh la la'],
            difficulty: 3,
        },
        {
            category: '_ de pied',
            items: ['Valet', 'Coup', 'Doigt', 'Plante'],
            difficulty: 4,
        }
    ]
},
{
    puzzle_name: '23 février 2026 - Scout toujours',
	puzzle_date: new Date('2026-02-23'),
    groups: [
        {
            category: 'Primordial',
            items: ['Majeur', 'Capital', 'Important', 'Notable'],
            difficulty: 1,
        },
        {
            category: 'Annexes de documentaire',
            items: ['Index', 'Glossaire', 'Sommaire', 'Bibliographie'],
            difficulty: 2,
        },
        {
            category: 'A des anneaux',
            items: ['Annulaire', 'Drapeau des JO', 'Sonic', 'Saturne'],
            difficulty: 3,
        },
        {
            category: 'Tom',
            items: ['Pouce', 'Sawyer', 'Tom', 'Major'],
            difficulty: 4,
        }
    ]
},
{
    puzzle_name: '19 février 2026 - Cerveau alternatif (par Machinois)',
	puzzle_date: new Date('2026-02-19'),
    groups: [
        {
            category: 'Locution latine',
            items: ['Mens', 'Sana', 'Corpore', 'Sano'],
            difficulty: 1,
        },
        {
            category: 'Dans un troupeau d\'éléphants',
            items: ['Défenses', 'Oreilles', 'Queues', 'Trompes'],
            difficulty: 2,
        },
        {
            category: 'Fais du foot',
            items: ['Passes', 'Attaques', 'Joues', 'Marques'],
            difficulty: 3,
        },
        {
            category: 'BAN_',
            items: ['Nies', 'Dage', 'Ane', 'Que'],
            difficulty: 4,
        }
    ]
},
{
    puzzle_name: '16 février 2026 - Pangolin et baleine',
	puzzle_date: new Date('2026-02-16'),
    groups: [
        {
            category: 'Détecte à l\'odeur',
            items: ['Sent', 'Renifle', 'Flaire', 'Hume'],
            difficulty: 1,
        },
        {
            category: 'Fluides corporels',
            items: ['Sang', 'Larme', 'Morve', 'Salive'],
            difficulty: 2,
        },
        {
            category: 'Sur une copie sans erreur',
            items: ['100', 'Sans-faute', 'Parfait', 'A+'],
            difficulty: 3,
        },
        {
            category: '_ coeur',
            items: ['Sans', 'Bon', 'Joli', 'Crève'],
            difficulty: 4,
        }
    ]
},
{
    puzzle_name: '9 février 2026 - Légumineuses',
	puzzle_date: new Date('2026-02-09'),
    groups: [
        {
            category: 'Conforte',
            items: ['épaule', 'Soutient', 'encourage', 'aide'],
            difficulty: 1,
        },
        {
            category: 'Accessoires de fixation',
            items: ['Cheville', 'Clou', 'Attache', 'Punaise'],
            difficulty: 2,
        },
        {
            category: 'Coup de _',
            items: ['Main', 'Poing', 'Maître', 'Chance'],
            difficulty: 3,
        },
        {
            category: 'Les Beatles avec une lettre en moins',
            items: ['Jon', 'Pau', 'Gorge', 'Ring'],
            difficulty: 4,
        }
    ]
},
{
    puzzle_name: '2 février 2026 - Zone humide',
	puzzle_date: new Date('2026-02-02'),
    groups: [
        {
            category: 'Couvre-chefs',
            items: ['Chapeau', 'Canotier', 'Calot', 'Bob'],
            difficulty: 1,
        },
        {
            category: 'Alphabet radio',
            items: ['Bravo', 'Delta', 'Kilo', 'Mike'],
            difficulty: 2,
        },
        {
            category: 'Elements du tableau périodique',
            items: ['Nickel', 'Plomb', 'Or', 'Néon'],
            difficulty: 3,
        },
        {
            category: 'Peut apparaître sur le bulletin',
            items: ['Félicitations', 'Moyenne', 'Absences', 'Notes'],
            difficulty: 4,
        }
    ]
},
{
    puzzle_name: '26 janvier 2026 - Community Manager',
	puzzle_date: new Date('2026-01-26'),
    groups: [
        {
            category: 'Unités de temps',
            items: ['Jour', 'Mois', 'Semaine', 'Année'],
            difficulty: 1,
        },
        {
            category: 'Mots empruntés à l\'anglais',
            items: ['Weekend', 'Nuggets', 'Body', 'Master'],
            difficulty: 2,
        },
        {
            category: 'Ce que Me peut vouloir dire',
            items: ['Mercredi', 'Maître', 'Moi', 'Méthyle'],
            difficulty: 3,
        },
        {
            category: '_ gras',
            items: ['Mardi', 'Crayon', 'Foie', 'Corps'],
            difficulty: 4,
        }
    ]
},
{
    puzzle_name: '19 janvier 2026 - Pop Corn',
	puzzle_date: new Date('2026-01-19'),
    groups: [
        {
            category: 'Torgnole',
            items: ['Tarte', 'Châtaigne', 'Claque', 'Gnon'],
            difficulty: 1,
        },
        {
            category: 'Ingrédients de la béchamel',
            items: ['Beurre', 'Farine', 'Lait', 'Muscade'],
            difficulty: 2,
        },
        {
            category: 'Farines',
            items: ['Blé', 'Maïs', 'Riz', 'Froment'],
            difficulty: 3,
        },
        {
            category: 'Papa _',
            items: ['Gâteau', 'Noël', 'Poule', 'Doc'],
            difficulty: 4,
        }
    ]
},
{
    puzzle_name: '12 janvier 2026 - Hypersensibles',
	puzzle_date: new Date('2026-01-12'),
    groups: [
        {
            category: 'Chez le coiffeur',
            items: ['Raie', 'Mèche', 'Tresse', 'Coupe'],
            difficulty: 1,
        },
        {
            category: 'Emplacement',
            items: ['Lieu', 'Endroit', 'Place', 'Secteur'],
            difficulty: 2,
        },
        {
            category: 'Unités de pression',
            items: ['Bar', 'Pascal', 'Atmosphère', 'Pièze'],
            difficulty: 3,
        },
        {
            category: 'Homophones de notes de musique',
            items: ['Mie', 'Sole', 'Dos', 'Scie'],
            difficulty: 4,
        }
    ]
},
{
    puzzle_name: '05 janvier 2026 - La quenouille',
	puzzle_date: new Date('2026-01-05'),
    groups: [
        {
            category: 'Affliction',
            items: ['Tristesse', 'Chagrin', 'Désespoir', 'Peine'],
            difficulty: 1,
        },
        {
            category: 'Genre musical',
            items: ['Blues', 'Soul', 'Jazz', 'Rock'],
            difficulty: 2,
        },
        {
            category: 'Premier mot de radios françaises',
            items: ['Nostalgie', 'Chérie', 'Europe', 'Rire'],
            difficulty: 3,
        },
        {
            category: 'ça vole',
            items: ['Bourdon', 'Chouette', 'Avion', 'Cambrioleur'],
            difficulty: 4,
        }
    ]
},
{
    puzzle_name: '29 décembre 2025 - A bientôt',
	puzzle_date: new Date('2025-12-29'),
    groups: [
        {
            category: 'Parties d\'appartement',
            items: ['Entrée', 'Balcon', 'Cuisine', 'Couloir'],
            difficulty: 1,
        },
        {
            category: 'Sans relief',
            items: ['Plat', 'Uni', 'Banal', 'Terne'],
            difficulty: 2,
        },
        {
            category: 'Pour boire en ville',
            items: ['Café', 'Salon de thé', 'Bar', 'Bistrot'],
            difficulty: 3,
        },
        {
            category: 'On peut en priver un enfant',
            items: ['Dessert', 'Téléphone', 'Sortie', 'Argent de poche'],
            difficulty: 4,
        }
    ]
},
{
    puzzle_name: '22 décembre 2025 - Boîtes',
	puzzle_date: new Date('2025-12-22'),
    groups: [
        {
            category: 'Sur un plateau d\'échecs',
            items: ['Tours', 'Pions', 'Reine', 'Cases'],
            difficulty: 1,
        },
        {
            category: 'Attributs du Père Noël',
            items: ['Rennes', 'barbe', 'bottes', 'bonnet'],
            difficulty: 2,
        },
        {
            category: 'Jambes, en argot',
            items: ['Cannes', 'Quilles', 'Pattes', 'Guiboles'],
            difficulty: 3,
        },
        {
            category: 'Prendre les _',
            items: ['Paris', 'Devants', 'Escaliers', 'Gens pour des cons'],
            difficulty: 4,
        }
    ]
},
{
    puzzle_name: '15 décembre 2025 - Pulls de Noël',
	puzzle_date: new Date('2025-12-15'),
    groups: [
        {
            category: 'Baguettes',
            items: ['Flûte', 'Ficelle', 'tradition', 'moulée'],
            difficulty: 1,
        },
        {
            category: 'Parties de machine à laver',
            items: ['Tambour', 'filtre', 'courroie', 'hublot'],
            difficulty: 2,
        },
        {
            category: '_ droit',
            items: ['Piano', 'bras', 'angle', 'passe'],
            difficulty: 3,
        },
        {
            category: 'Termine par une matière première',
            items: ['Hautbois', 'Saint-Pierre', 'Cimeterre', 'Passable'],
            difficulty: 4,
        }
    ]
},
{
    puzzle_name: '8 décembre 2025 - Raclette ou rien',
	puzzle_date: new Date('2025-12-08'),
    groups: [
        {
            category: 'Bobo au pied',
            items: ['cor', 'ampoule', 'cal', 'oeil-de-perdrix'],
            difficulty: 1,
        },
        {
            category: 'A de la cire',
            items: ['Oreille', 'bougie', 'sceau', 'musée Grévin'],
            difficulty: 2,
        },
        {
            category: 'S\'allume dans la voiture',
            items: ['Phare', 'Clignotant', 'voyant', 'warning'],
            difficulty: 3,
        },
        {
            category: '_ rouge',
            items: ['Feu', 'Voir', 'alerte', 'nez'],
            difficulty: 4,
        }
    ]
},
{
    puzzle_name: '1 décembre 2025 - Ninja !',
	puzzle_date: new Date('2025-12-01'),
    groups: [
        {
            category: 'Mignon',
            items: ['Mimi', 'Chou', 'Angélique', 'Craquant'],
            difficulty: 1,
        },
        {
            category: 'Au pluriel, mensonges',
            items: ['Salade', 'histoire', 'bêtise', 'craque'],
            difficulty: 2,
        },
        {
            category: 'Nains célèbres',
            items: ['Potiron', 'Joyeux', 'Mimie Mathy', 'Passepartout'],
            difficulty: 3,
        },
        {
            category: 'Dans Cendrillon',
            items: ['Citrouille', 'Fée', 'Prince', 'Chaussure'],
            difficulty: 4,
        }
    ]
},
{
    puzzle_name: '24 novembre 2025 - Professeurs de français',
	puzzle_date: new Date('2025-11-24'),
    groups: [
        {
            category: 'Prénoms',
            items: ['Guy', 'Violette', 'Clémentine', 'Pierre'],
            difficulty: 1,
        },
        {
            category: 'Domestique',
            items: ['laquais', 'boy', 'valet', 'serviteur'],
            difficulty: 2,
        },
        {
            category: 'Les petits amis de Caroline',
            items: ['Pitou', 'Kid', 'Noiraud', 'Boum'],
            difficulty: 3,
        },
        {
            category: 'Super _',
            items: ['man', 'marché', 'nova', 'sonique'],
            difficulty: 4,
        }
    ]
}, {
    puzzle_name: '16 novembre 2025 - Chocolatine',
	puzzle_date: new Date('2025-11-16'),
    groups: [
        {
            category: 'Apéro salé',
            items: ['canapé', 'toast', 'petit-four', 'tartine'],
            difficulty: 1,
        },
        {
            category: 'Facile',
            items: ['commode', 'pratique', 'simple', 'confortable'],
            difficulty: 2,
        },
        {
            category: 'S\'accroche au mur',
            items: ['\u00E9tagère', 'tableau', 'tête de sanglier', 'patère'],
            difficulty: 3,
        },
        {
            category: 'A glace',
            items: ['patin', 'armoire', 'pic', 'bac'],
            difficulty: 4,
        }
    ]
}];

