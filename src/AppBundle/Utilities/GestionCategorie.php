<?php


namespace AppBundle\Utilities;


use Doctrine\ORM\EntityManager;

class GestionCategorie
{
    public function __construct(EntityManager $entityManager)
    {
        $this->em = $entityManager;
    }

    public function addDomaine($domaineID)
    {
        $domaine = $this->em->getRepository("AppBundle:Domaine")->findOneBy(['id'=>$domaineID]); //
        $domaine->setNombreCategorie($domaine->getNombreCategorie()+1);//dump($domaine);die();
        $this->em->flush();
        return true;
    }

    /**
     * Suppression de la categorie dans le domaine
     */
    public function deleteDomaine($domaineID)
    {
        $domaine = $this->em->getRepository("AppBundle:Domaine")->findOneBy(['id'=>$domaineID]);
        $domaine->setNombreCategorie($domaine->getNombreCategorie()-1);
        $this->em->flush();
        return true;
    }
}
