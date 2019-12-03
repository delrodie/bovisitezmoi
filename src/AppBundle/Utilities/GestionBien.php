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

    /**
     * @param $slug
     * @return bool
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function addProduit($slug)
    {
        $bien = $this->em->getRepository("AppBundle:Bien")->findOneBy(['slug'=>$slug]);
        if ($bien)
        {
            $bien->setNombreProduit($bien->getNombreProduit()+1);
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
    public function addFamille($slug)
    {
        $famille = $this->em->getRepository("AppBundle:Famille")->findOneBy(['slug'=>$slug]);
        if ($famille)
        {
            $famille->setNombreProduit($famille->getNombreProduit()+1);
            $this->em->flush();

            return true;
        }
        return false;
    }

    public function referenceProduit($slug)
    {
        $famille = $this->em->getRepository("AppBundle:Famille")->findOneBy(['slug'=>$slug]);
        if ($famille){
            if (!$famille->getNombreProduit()) {
                $nombre = 1;
            }else{
                $nombre = $famille->getNombreProduit()+1;
            }
            if ($nombre < 10){$ref = '000'.$nombre;}
            elseif ($nombre <100){$ref = '00'.$nombre;}
            elseif ($nombre < 1000){$ref = '0'.$nombre;}
            else{ $ref = $nombre; }
            $reference = $famille->getCode().''.$ref;
            return $reference;
        }else{
            return false;
        }
    }
}
