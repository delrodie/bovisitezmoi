<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Famille;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;use Symfony\Component\HttpFoundation\Request;

/**
 * Famille controller.
 *
 * @Route("backend/famille")
 */
class FamilleController extends Controller
{
    /**
     * Lists all famille entities.
     *
     * @Route("/", name="backend_famille_index")
     * @Method({"GET", "POST"})
     */
    public function indexAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $familles = $em->getRepository('AppBundle:Famille')->findAll();
        $famille = new Famille();
        $form = $this->createForm('AppBundle\Form\FamilleType', $famille);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($famille);
            $em->flush();

            return $this->redirectToRoute('backend_famille_index');
        }

        return $this->render('famille/index.html.twig', array(
            'familles' => $familles,
            'famille' => $famille,
            'form' => $form->createView(),
        ));
    }

    /**
     * Creates a new famille entity.
     *
     * @Route("/new", name="backend_famille_new")
     * @Method({"GET", "POST"})
     */
    public function newAction(Request $request)
    {
        $famille = new Famille();
        $form = $this->createForm('AppBundle\Form\FamilleType', $famille);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($famille);
            $em->flush();

            return $this->redirectToRoute('backend_famille_show', array('id' => $famille->getId()));
        }

        return $this->render('famille/new.html.twig', array(
            'famille' => $famille,
            'form' => $form->createView(),
        ));
    }

    /**
     * Finds and displays a famille entity.
     *
     * @Route("/{id}", name="backend_famille_show")
     * @Method("GET")
     */
    public function showAction(Famille $famille)
    {
        $deleteForm = $this->createDeleteForm($famille);

        return $this->render('famille/show.html.twig', array(
            'famille' => $famille,
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Displays a form to edit an existing famille entity.
     *
     * @Route("/{slug}/edit", name="backend_famille_edit")
     * @Method({"GET", "POST"})
     */
    public function editAction(Request $request, Famille $famille)
    {
        $em = $this->getDoctrine()->getManager();

        $familles = $em->getRepository('AppBundle:Famille')->findAll();
        $deleteForm = $this->createDeleteForm($famille);
        $editForm = $this->createForm('AppBundle\Form\FamilleType', $famille);
        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('backend_famille_index');
        }

        return $this->render('famille/edit.html.twig', array(
            'familles' => $familles,
            'famille' => $famille,
            'edit_form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Deletes a famille entity.
     *
     * @Route("/{id}", name="backend_famille_delete")
     * @Method("DELETE")
     */
    public function deleteAction(Request $request, Famille $famille)
    {
        $form = $this->createDeleteForm($famille);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($famille);
            $em->flush();
        }

        return $this->redirectToRoute('backend_famille_index');
    }

    /**
     * Creates a form to delete a famille entity.
     *
     * @param Famille $famille The famille entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm(Famille $famille)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('backend_famille_delete', array('id' => $famille->getId())))
            ->setMethod('DELETE')
            ->getForm()
        ;
    }
}
