<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request)
    {

         $em = $this->getDoctrine()->getManager();
        $sliders = $em->getRepository("AppBundle:Slider")->findList(); //dump($sliders);die();
        if (!$sliders) return $this->redirectToRoute("frontebd_maintenance");
        $domaines = $em->getRepository("AppBundle:Domaine")->liste()->getQuery()->getResult();
        $categories = $em->getRepository("AppBundle:Categorie")->liste()->getQuery()->getResult();
        $biens = $em->getRepository("AppBundle:Bien")->findListeDesc();
        // replace this example code with whatever you need
        return $this->render('default/index.html.twig',[
            'sliders' => $sliders,
            'domaines' => $domaines,
            'categories' => $categories,
            'biens' => $biens,
        ]);
    }

    /**
     * @Route("/menu", name="menu")
     */
    public function menuAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $menus = $em->getRepository("AppBundle:Domaine")->liste()->getQuery()->getResult();
        return $this->render("default/menu.html.twig",[
            'menus' => $menus,
        ]);
    }

    /**
     * @Route("/backend/tableau-de-bord", name="backend_dashboard")
     */
    public function dashboardAction()
    {
        //return $this->redirectToRoute("frontebd_maintenance");
        return $this->render("default/dashboard.html.twig");
    }
}
