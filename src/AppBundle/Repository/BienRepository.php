<?php

namespace AppBundle\Repository;

/**
 * BienRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class BienRepository extends \Doctrine\ORM\EntityRepository
{
    public function findListeDesc()
    {
        return $this->createQueryBuilder('b')->orderBy('b.id','DESC')->getQuery()->getResult();
    }

    /**
     * FrCategorieController:indexAction
     * @param $domaine
     * @return array
     */
    public function findByDomaine($domaine)
    {
        return $this->createQueryBuilder('b')
                    ->leftJoin('b.categorie', 'c')
                    ->leftJoin('c.domaine', 'd')
                    ->where('d.id = :id')
                    ->orderBy('b.id', 'DESC')
                    ->setParameter('id', $domaine)
                    ->getQuery()->getResult()
            ;
    }

    /**
     * FrBienController:rechercheAction
     * @param $categorie
     * @return array
     */
    public function findByCategorie($categorie)
    {
        return $this->createQueryBuilder('b')
                    ->leftJoin('b.categorie', 'c')
                    ->where('c.slug = :categorie')
                    ->orderBy('b.id', 'DESC')
                    ->setParameter('categorie', $categorie)
                    ->getQuery()->getResult()
            ;
    }

    public function findBien($bien)
    {
        return $this->createQueryBuilder('b')
                    ->where('b.id = :bien')
                    ->setParameter('bien', $bien)
            ;
    }
}
