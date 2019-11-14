<?php


namespace AppBundle\Utilities;


use Doctrine\ORM\EntityManager;

class GestionBien
{
    public function __construct(EntityManager $entityManager)
    {
        $this->em = $entityManager;
    }

    /**
     * Ajout de Categorie
     */
    public function addCategorie($categorieID)
    {
        $categorie = $this->em->getRepository("AppBundle:Categorie")->findOneBy(['id'=>$categorieID]);
        $categorie->setNombreBien($categorie->getNombreBien()+1);
        $this->em->flush();
        return true;
    }

    /**
     * Suppression de catgeorie
     */
    public function deleteCategorie($categorieID)
    {
        $categorie = $this->em->getRepository("AppBundle:Categorie")->findOneBy(['id'=>$categorieID]);
        $categorie->setNombreBien($categorie->getNombreBien()-1);
        $this->em->flush();
        return true;
    }

    /**
     * Ajout de partenaire
     */
    public function addPartenaire($id)
    {
        $partenaire = $this->em->getRepository("AppBundle:Partenaire")->findOneBy(['id'=>$id]);
        if ($partenaire){
            $partenaire->setNombreBien($partenaire->getNombreBien()+1);
            $this->em->flush();

            return true;
        }
        return false;
    }

    /**
     * Reductio du nombre de biens du partenaire
     */
    public function deletePartenaire($id)
    {
        $partenaire = $this->em->getRepository("AppBundle:Partenaire")->findOneBy(['id'=>$id]);
        if ($partenaire){
            $partenaire->setNombreBien($partenaire->getNombreBien()-1);
            $this->em->flush();

            return true;
        }
        return false;
    }

    /**
     * @param $slug
     * @return bool
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function addVue($slug)
    {
        $bien = $this->em->getRepository("AppBundle:Bien")->findOneBy(['slug'=>$slug]);
        if ($bien)
        {
            $bien->setNombreVue($bien->getNombreVue()+1);
            $this->em->flush();

            return true;
        }
        return false;
    }
}
