<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

/**
 * Class StatistiqueController
 * @Route("/statistiques")
 */
class StatistiqueController extends Controller
{
    /**
     * @Route("/nouveautes", name="statistiques_nouveaute")
     */
    public function nouveauteAction()
    {
        $em = $this->getDoctrine()->getManager();
        $domaines = $em->getRepository("AppBundle:Domaine")->liste()->getQuery()->getResult();
        $biens = $em->getRepository("AppBundle:Bien")->getNouveaute(true);
        $categories = $em->getRepository("AppBundle:Categorie")->findAll();

        return $this->render("frontend/nouveaute.html.twig",[
            'domaines' => $domaines,
            'biens' => $biens,
            'categories' => $categories
        ]);
    }

    /**
     * @Route("/plus-visites/", name="statistiques_visite")
     */
    public function visiteAction()
    {
        $em = $this->getDoctrine()->getManager();
        $domaines = $em->getRepository("AppBundle:Domaine")->liste()->getQuery()->getResult();
        $biens = $em->getRepository("AppBundle:Bien")->getPlusVisite(true);
        $categories = $em->getRepository("AppBundle:Categorie")->findAll();

        return $this->render("frontend/nouveaute.html.twig",[
            'domaines' => $domaines,
            'biens' => $biens,
            'categories' => $categories
        ]);
    }
}
