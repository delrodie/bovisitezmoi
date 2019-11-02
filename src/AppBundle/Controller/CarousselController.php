<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Caroussel;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;use Symfony\Component\HttpFoundation\Request;

/**
 * Caroussel controller.
 *
 * @Route("backend/caroussel")
 */
class CarousselController extends Controller
{
    /**
     * Lists all caroussel entities.
     *
     * @Route("/", name="backend_caroussel_index")
     * @Method({"GET", "POST"})
     */
    public function indexAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $caroussels = $em->getRepository('AppBundle:Caroussel')->findListDesc();
        $caroussel = new Caroussel();
        $form = $this->createForm('AppBundle\Form\CarousselType', $caroussel);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($caroussel);
            $em->flush();

            return $this->redirectToRoute('backend_caroussel_index');
        }

        return $this->render('caroussel/index.html.twig', array(
            'caroussels' => $caroussels,
            'caroussel' => $caroussel,
            'form' => $form->createView(),
        ));
    }

    /**
     * Creates a new caroussel entity.
     *
     * @Route("/new", name="backend_caroussel_new")
     * @Method({"GET", "POST"})
     */
    public function newAction(Request $request)
    {
        $caroussel = new Caroussel();
        $form = $this->createForm('AppBundle\Form\CarousselType', $caroussel);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($caroussel);
            $em->flush();

            return $this->redirectToRoute('backend_caroussel_show', array('id' => $caroussel->getId()));
        }

        return $this->render('caroussel/new.html.twig', array(
            'caroussel' => $caroussel,
            'form' => $form->createView(),
        ));
    }

    /**
     * Finds and displays a caroussel entity.
     *
     * @Route("/{id}", name="backend_caroussel_show")
     * @Method("GET")
     */
    public function showAction(Caroussel $caroussel)
    {
        $deleteForm = $this->createDeleteForm($caroussel);

        return $this->render('caroussel/show.html.twig', array(
            'caroussel' => $caroussel,
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Displays a form to edit an existing caroussel entity.
     *
     * @Route("/{slug}/edit", name="backend_caroussel_edit")
     * @Method({"GET", "POST"})
     */
    public function editAction(Request $request, Caroussel $caroussel)
    {
        $em = $this->getDoctrine()->getManager();

        $caroussels = $em->getRepository('AppBundle:Caroussel')->findListDesc();
        $deleteForm = $this->createDeleteForm($caroussel);
        $editForm = $this->createForm('AppBundle\Form\CarousselType', $caroussel);
        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('backend_caroussel_index');
        }

        return $this->render('caroussel/edit.html.twig', array(
            'caroussels' => $caroussels,
            'caroussel' => $caroussel,
            'edit_form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Deletes a caroussel entity.
     *
     * @Route("/{id}", name="backend_caroussel_delete")
     * @Method("DELETE")
     */
    public function deleteAction(Request $request, Caroussel $caroussel)
    {
        $form = $this->createDeleteForm($caroussel);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($caroussel);
            $em->flush();
        }

        return $this->redirectToRoute('backend_caroussel_index');
    }

    /**
     * Creates a form to delete a caroussel entity.
     *
     * @param Caroussel $caroussel The caroussel entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm(Caroussel $caroussel)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('backend_caroussel_delete', array('id' => $caroussel->getId())))
            ->setMethod('DELETE')
            ->getForm()
        ;
    }
}
