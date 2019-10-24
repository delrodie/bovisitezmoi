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
        // replace this example code with whatever you need
        return $this->render('default/maintenance.html.twig');
    }

    /**
     * @Route("/backend/tableau-de-bord", name="backend_dashboard")
     */
    public function dashboardAction()
    {
        return $this->render("default/dashboard.html.twig");
    }
}
