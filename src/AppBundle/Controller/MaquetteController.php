<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

/**
 * Class MaquetteController
 * @Route("/maquette")
 */
class MaquetteController extends Controller
{
    /**
     * @Route("/", name="maquette_index")
     */
    public function indexAction()
    {
        return $this->render("maquette/index.html.twig");
    }

    /**
     * @Route("/page", name="maquette_page")
     */
    public function pageAction()
    {
        return $this->render("maquette/page.html.twig");
    }

    /**
     * @Route("/details", name="maquette_details")
     */
    public function detailsAction()
    {
        return $this->render("maquette/details.html.twig");
    }
}
