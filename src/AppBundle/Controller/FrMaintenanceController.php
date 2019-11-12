<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;

/**
 * Class FrMaintenanceController
 * @Route("/maintenance")
 */
class FrMaintenanceController extends Controller
{
    /**
     * @Route("/", name="frontebd_maintenance")
     */
    public function indexAction()
    {
        return $this->render('default/maintenance.html.twig');
    }
}
