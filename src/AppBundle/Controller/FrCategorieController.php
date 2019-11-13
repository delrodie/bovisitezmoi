<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Domaine;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Component\HttpFoundation\Request;

/**
 * Class FrCategorieController
 * @Route("/categorie")
 */
class FrCategorieController extends Controller
{
    /**
     * @Route("/{slug}", name="frontend_domaine_show")
     * @Method("GET")
     */
    public function indexAction(Request $request, Domaine $domaine)
    {
        $em = $this->getDoctrine()->getManager();
        $sliders = $em->getRepository("AppBundle:Caroussel")->findList($domaine->getId());
        $domaines = $em->getRepository("AppBundle:Domaine")->liste()->getQuery()->getResult();
        $biens = $em->getRepository("AppBundle:Bien")->findByDomaine($domaine->getId());

        return $this->render('frontend/categorie.html.twig',[
            'domaines' => $domaines,
            'domaine' => $domaine,
            'sliders' => $sliders,
            'biens' => $biens,
        ]);
    }


}
