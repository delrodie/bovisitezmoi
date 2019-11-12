<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Component\HttpFoundation\Request;

/**
 * Class FrBienController
 * @Route("/bien")
 */
class FrBienController extends Controller
{
    /**
     * @Route("/{categorie}/{slug}", name="frontend_bien_show")
     * @Method("GET")
     */
    public function showAction(Request $request, $categorie, $slug)
    {
        $em = $this->getDoctrine()->getManager();
        $bien = $em->getRepository("AppBundle:Bien")->findOneBy(['slug'=>$slug]);

        return $this->render("frontend/details.html.twig",[
            'bien' => $bien
        ]);
    }
}
