<?php

namespace AppBundle\Repository;

/**
 * CarousselRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class CarousselRepository extends \Doctrine\ORM\EntityRepository
{
    public function findListDesc()
    {
        return $this->createQueryBuilder('c')->orderBy('c.id','DESC')->getQuery()->getResult();
    }
}
