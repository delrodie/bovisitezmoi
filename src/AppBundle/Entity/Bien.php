<?php

namespace AppBundle\Entity;

use Gedmo\Mapping\Annotation as Gedmo;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * Bien
 *
 * @ORM\Table(name="bien")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\BienRepository")
 * @Vich\Uploadable
 */
class Bien
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="titre", type="string", length=255)
     */
    private $titre;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="text", nullable=true)
     */
    private $description;

    /**
     * @var string
     *
     * @ORM\Column(name="tags", type="string",length=255, nullable=true)
     */
    private $tags;

    /**
     * @var string
     *
     * @ORM\Column(name="adresse", type="string", length=255, nullable=true)
     */
    private $adresse;

    /**
     * @var string
     *
     * @ORM\Column(name="telephone", type="string", length=255, nullable=true)
     */
    private $telephone;

    /**
     * @var string
     *
     * @ORM\Column(name="website", type="string", length=255, nullable=true)
     */
    private $website;

    /**
     * @var int
     *
     * @ORM\Column(name="prix", type="integer", nullable=true)
     */
    private $prix;

    /**
     * @var bool
     *
     * @ORM\Column(name="affichage_prix", type="boolean", nullable=true)
     */
    private $affichagePrix;

    /**
     * @var string
     *
     * @ORM\Column(name="visite_lien", type="string", length=255, nullable=true)
     */
    private $visiteLien;

    /**
     * @var string
     *
     * @ORM\Column(name="visite_dossier", type="string", length=255, nullable=true)
     */
    private $visiteDossier;

    /**
     * @var int
     *
     * @ORM\Column(name="nombre_vue", type="integer", nullable=true)
     */
    private $nombreVue;

    /**
     * @var string
     *
     * @ORM\Column(name="debut_promo", type="string", length=255, nullable=true)
     */
    private $debutPromo;

    /**
     * @var string
     *
     * @ORM\Column(name="fin_promo", type="string", length=255, nullable=true)
     */
    private $finPromo;

    /**
     * @var string
     *
     * @ORM\Column(name="google_map", type="string", length=255, nullable=true)
     */
    private $googleMap;

    /**
     * @var int
     *
     * @ORM\Column(name="nombre_produit", type="integer", nullable=true)
     */
    private $nombreProduit;
    
    /**
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\Mode")
     * @ORM\JoinColumn(name="mode_id", referencedColumnName="id")
     */
    private $mode;

    /**
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\Partenaire", inversedBy="biens")
     * @ORM\JoinColumn(name="partenaire_id", referencedColumnName="id")
     */
    private $partenaire;

    /**
     * @ORM\ManyToOne(targetEntity="AppBundle\Entity\Categorie", inversedBy="biens")
     * @ORM\JoinColumn(name="categorie_id", referencedColumnName="id")
     */
    private $categorie;

    /**
     * @ORM\OneToMany(targetEntity="AppBundle\Entity\Produit", mappedBy="bien")
     */
    private $produits;

    /**
     * NOTE: This is not a mapped field of entity metadata, just a simple property.
     *
     * @Vich\UploadableField(mapping="bien_image", fileNameProperty="imageName", size="imageSize")
     *
     * @var File
     */
    private $imageFile;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     *
     * @var string
     */
    private $imageName;

    /**
     * @ORM\Column(type="integer", nullable=true)
     *
     * @var integer
     */
    private $imageSize;

    /**
     * @ORM\Column(type="datetime")
     *
     * @var \DateTime
     */
    private $updatedAt;

    /**
     * If manually uploading a file (i.e. not using Symfony Form) ensure an instance
     * of 'UploadedFile' is injected into this setter to trigger the  update. If this
     * bundle's configuration parameter 'inject_on_load' is set to 'true' this setter
     * must be able to accept an instance of 'File' as the bundle will inject one here
     * during Doctrine hydration.
     *
     * @param File|\Symfony\Component\HttpFoundation\File\UploadedFile $image
     *
     * @return Bien
     */
    public function setImageFile(File $image = null)
    {
        $this->imageFile = $image;

        if ($image) {
            // It is required that at least one field changes if you are using doctrine
            // otherwise the event listeners won't be called and the file is lost
            $this->updatedAt = new \DateTimeImmutable();
        }

        return $this;
    }

    /**
     * @return File|null
     */
    public function getImageFile()
    {
        return $this->imageFile;
    }

    /**
     * @var string
     *
     * @Gedmo\Slug(fields={"titre"})
     * @ORM\Column(name="slug", type="string", length=75)
     */
    private $slug;

    /**
     * @var string
     *
     * @Gedmo\Blameable(on="create")
     * @ORM\Column(name="publie_par", type="string", length=25, nullable=true)
     */
    private $publiePar;

    /**
     * @var string
     *
     * @Gedmo\Blameable(on="update")
     * @ORM\Column(name="modifie_par", type="string", length=25, nullable=true)
     */
    private $modifiePar;

    /**
     * @var \DateTime
     *
     * @Gedmo\Timestampable(on="create")
     * @ORM\Column(name="publie_le", type="datetimetz", nullable=true)
     */
    private $publieLe;

    /**
     * @var \DateTime
     *
     * @Gedmo\Timestampable(on="update")
     * @ORM\Column(name="modifie_le", type="datetimetz", nullable=true)
     */
    private $modifieLe;


    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set titre
     *
     * @param string $titre
     *
     * @return Bien
     */
    public function setTitre($titre)
    {
        $this->titre = $titre;

        return $this;
    }

    /**
     * Get titre
     *
     * @return string
     */
    public function getTitre()
    {
        return $this->titre;
    }

    /**
     * Set description
     *
     * @param string $description
     *
     * @return Bien
     */
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get description
     *
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Set adresse
     *
     * @param string $adresse
     *
     * @return Bien
     */
    public function setAdresse($adresse)
    {
        $this->adresse = $adresse;

        return $this;
    }

    /**
     * Get adresse
     *
     * @return string
     */
    public function getAdresse()
    {
        return $this->adresse;
    }

    /**
     * Set telephone
     *
     * @param string $telephone
     *
     * @return Bien
     */
    public function setTelephone($telephone)
    {
        $this->telephone = $telephone;

        return $this;
    }

    /**
     * Get telephone
     *
     * @return string
     */
    public function getTelephone()
    {
        return $this->telephone;
    }

    /**
     * Set website
     *
     * @param string $website
     *
     * @return Bien
     */
    public function setWebsite($website)
    {
        $this->website = $website;

        return $this;
    }

    /**
     * Get website
     *
     * @return string
     */
    public function getWebsite()
    {
        return $this->website;
    }

    /**
     * Set prix
     *
     * @param integer $prix
     *
     * @return Bien
     */
    public function setPrix($prix)
    {
        $this->prix = $prix;

        return $this;
    }

    /**
     * Get prix
     *
     * @return int
     */
    public function getPrix()
    {
        return $this->prix;
    }

    /**
     * Set nombreVue
     *
     * @param integer $nombreVue
     *
     * @return Bien
     */
    public function setNombreVue($nombreVue)
    {
        $this->nombreVue = $nombreVue;

        return $this;
    }

    /**
     * Get nombreVue
     *
     * @return integer
     */
    public function getNombreVue()
    {
        return $this->nombreVue;
    }

    /**
     * Set imageName
     *
     * @param string $imageName
     *
     * @return Bien
     */
    public function setImageName($imageName)
    {
        $this->imageName = $imageName;

        return $this;
    }

    /**
     * Get imageName
     *
     * @return string
     */
    public function getImageName()
    {
        return $this->imageName;
    }

    /**
     * Set imageSize
     *
     * @param integer $imageSize
     *
     * @return Bien
     */
    public function setImageSize($imageSize)
    {
        $this->imageSize = $imageSize;

        return $this;
    }

    /**
     * Get imageSize
     *
     * @return integer
     */
    public function getImageSize()
    {
        return $this->imageSize;
    }

    /**
     * Set updatedAt
     *
     * @param \DateTime $updatedAt
     *
     * @return Bien
     */
    public function setUpdatedAt($updatedAt)
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    /**
     * Get updatedAt
     *
     * @return \DateTime
     */
    public function getUpdatedAt()
    {
        return $this->updatedAt;
    }

    /**
     * Set slug
     *
     * @param string $slug
     *
     * @return Bien
     */
    public function setSlug($slug)
    {
        $this->slug = $slug;

        return $this;
    }

    /**
     * Get slug
     *
     * @return string
     */
    public function getSlug()
    {
        return $this->slug;
    }

    /**
     * Set publiePar
     *
     * @param string $publiePar
     *
     * @return Bien
     */
    public function setPubliePar($publiePar)
    {
        $this->publiePar = $publiePar;

        return $this;
    }

    /**
     * Get publiePar
     *
     * @return string
     */
    public function getPubliePar()
    {
        return $this->publiePar;
    }

    /**
     * Set modifiePar
     *
     * @param string $modifiePar
     *
     * @return Bien
     */
    public function setModifiePar($modifiePar)
    {
        $this->modifiePar = $modifiePar;

        return $this;
    }

    /**
     * Get modifiePar
     *
     * @return string
     */
    public function getModifiePar()
    {
        return $this->modifiePar;
    }

    /**
     * Set publieLe
     *
     * @param \DateTime $publieLe
     *
     * @return Bien
     */
    public function setPublieLe($publieLe)
    {
        $this->publieLe = $publieLe;

        return $this;
    }

    /**
     * Get publieLe
     *
     * @return \DateTime
     */
    public function getPublieLe()
    {
        return $this->publieLe;
    }

    /**
     * Set modifieLe
     *
     * @param \DateTime $modifieLe
     *
     * @return Bien
     */
    public function setModifieLe($modifieLe)
    {
        $this->modifieLe = $modifieLe;

        return $this;
    }

    /**
     * Get modifieLe
     *
     * @return \DateTime
     */
    public function getModifieLe()
    {
        return $this->modifieLe;
    }

    /**
     * Set mode
     *
     * @param \AppBundle\Entity\Mode $mode
     *
     * @return Bien
     */
    public function setMode(\AppBundle\Entity\Mode $mode = null)
    {
        $this->mode = $mode;

        return $this;
    }

    /**
     * Get mode
     *
     * @return \AppBundle\Entity\Mode
     */
    public function getMode()
    {
        return $this->mode;
    }

    /**
     * Set partenaire
     *
     * @param \AppBundle\Entity\Partenaire $partenaire
     *
     * @return Bien
     */
    public function setPartenaire(\AppBundle\Entity\Partenaire $partenaire = null)
    {
        $this->partenaire = $partenaire;

        return $this;
    }

    /**
     * Get partenaire
     *
     * @return \AppBundle\Entity\Partenaire
     */
    public function getPartenaire()
    {
        return $this->partenaire;
    }

    /**
     * Set visiteLien
     *
     * @param string $visiteLien
     *
     * @return Bien
     */
    public function setVisiteLien($visiteLien)
    {
        $this->visiteLien = $visiteLien;

        return $this;
    }

    /**
     * Get visiteLien
     *
     * @return string
     */
    public function getVisiteLien()
    {
        return $this->visiteLien;
    }

    /**
     * Set visiteDossier
     *
     * @param string $visiteDossier
     *
     * @return Bien
     */
    public function setVisiteDossier($visiteDossier)
    {
        $this->visiteDossier = $visiteDossier;

        return $this;
    }

    /**
     * Get visiteDossier
     *
     * @return string
     */
    public function getVisiteDossier()
    {
        return $this->visiteDossier;
    }

    /**
     * Set categorie
     *
     * @param \AppBundle\Entity\Categorie $categorie
     *
     * @return Bien
     */
    public function setCategorie(\AppBundle\Entity\Categorie $categorie = null)
    {
        $this->categorie = $categorie;

        return $this;
    }

    /**
     * Get categorie
     *
     * @return \AppBundle\Entity\Categorie
     */
    public function getCategorie()
    {
        return $this->categorie;
    }

    /**
     * Set tags
     *
     * @param string $tags
     *
     * @return Bien
     */
    public function setTags($tags)
    {
        $this->tags = $tags;

        return $this;
    }

    /**
     * Get tags
     *
     * @return string
     */
    public function getTags()
    {
        return $this->tags;
    }

    /**
     * Set debutPromo
     *
     * @param string $debutPromo
     *
     * @return Bien
     */
    public function setDebutPromo($debutPromo)
    {
        $this->debutPromo = $debutPromo;

        return $this;
    }

    /**
     * Get debutPromo
     *
     * @return string
     */
    public function getDebutPromo()
    {
        return $this->debutPromo;
    }

    /**
     * Set finPromo
     *
     * @param string $finPromo
     *
     * @return Bien
     */
    public function setFinPromo($finPromo)
    {
        $this->finPromo = $finPromo;

        return $this;
    }

    /**
     * Get finPromo
     *
     * @return string
     */
    public function getFinPromo()
    {
        return $this->finPromo;
    }

    /**
     * Set affichagePrix
     *
     * @param boolean $affichagePrix
     *
     * @return Bien
     */
    public function setAffichagePrix($affichagePrix)
    {
        $this->affichagePrix = $affichagePrix;

        return $this;
    }

    /**
     * Get affichagePrix
     *
     * @return boolean
     */
    public function getAffichagePrix()
    {
        return $this->affichagePrix;
    }

    /**
     * Set googleMap
     *
     * @param string $googleMap
     *
     * @return Bien
     */
    public function setGoogleMap($googleMap)
    {
        $this->googleMap = $googleMap;

        return $this;
    }

    /**
     * Get googleMap
     *
     * @return string
     */
    public function getGoogleMap()
    {
        return $this->googleMap;
    }

    /**
     * Set nombreProduit
     *
     * @param integer $nombreProduit
     *
     * @return Bien
     */
    public function setNombreProduit($nombreProduit)
    {
        $this->nombreProduit = $nombreProduit;

        return $this;
    }

    /**
     * Get nombreProduit
     *
     * @return integer
     */
    public function getNombreProduit()
    {
        return $this->nombreProduit;
    }
    /**
     * Constructor
     */
    public function __construct()
    {
        $this->produits = new \Doctrine\Common\Collections\ArrayCollection();
    }

    /**
     * Add produit
     *
     * @param \AppBundle\Entity\Produit $produit
     *
     * @return Bien
     */
    public function addProduit(\AppBundle\Entity\Produit $produit)
    {
        $this->produits[] = $produit;

        return $this;
    }

    /**
     * Remove produit
     *
     * @param \AppBundle\Entity\Produit $produit
     */
    public function removeProduit(\AppBundle\Entity\Produit $produit)
    {
        $this->produits->removeElement($produit);
    }

    /**
     * Get produits
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getProduits()
    {
        return $this->produits;
    }
}
