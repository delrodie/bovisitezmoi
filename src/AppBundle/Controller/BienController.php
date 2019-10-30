<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Bien;
use AppBundle\Utilities\GestionBien;
use AppBundle\Utilities\GestionCategorie;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;use Symfony\Component\HttpFoundation\Request;

/**
 * Bien controller.
 *
 * @Route("backend/bien")
 */
class BienController extends Controller
{
    /**
     * Lists all bien entities.
     *
     * @Route("/", name="backend_bien_index")
     * @Method({"GET", "POST"})
     */
    public function indexAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();

        $biens = $em->getRepository('AppBundle:Bien')->findAll();

        return $this->render('bien/index.html.twig', array(
            'biens' => $biens,
        ));
    }

    /**
     * Creates a new bien entity.
     *
     * @Route("/new", name="backend_bien_new")
     * @Method({"GET", "POST"})
     */
    public function newAction(Request $request, GestionBien $gestionBien)
    {
        $bien = new Bien();
        $form = $this->createForm('AppBundle\Form\BienType', $bien);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($bien);
            $em->flush();
            $gestionBien->addCategorie($bien->getCategorie()->getId());
            $gestionBien->addPartenaire($bien->getPartenaire()->getId());
            $this->addFlash('notice', "Le Bien ".$bien->getTitre()." de la sous catégorie ".$bien->getCategorie()->getLibelle()." a été ajouté avec succès!");
            return $this->redirectToRoute('backend_bien_show', array('slug' => $bien->getSlug()));
        }

        return $this->render('bien/new.html.twig', array(
            'bien' => $bien,
            'form' => $form->createView(),
        ));
    }

    /**
     * Finds and displays a bien entity.
     *
     * @Route("/{slug}", name="backend_bien_show")
     * @Method("GET")
     */
    public function showAction(Bien $bien)
    {
        $deleteForm = $this->createDeleteForm($bien);

        return $this->render('bien/show.html.twig', array(
            'bien' => $bien,
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Displays a form to edit an existing bien entity.
     *
     * @Route("/{slug}/edit", name="backend_bien_edit")
     * @Method({"GET", "POST"})
     */
    public function editAction(Request $request, Bien $bien)
    {
        $deleteForm = $this->createDeleteForm($bien);
        $editForm = $this->createForm('AppBundle\Form\BienType', $bien);
        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('backend_bien_show', array('slug' => $bien->getSlug()));
        }

        return $this->render('bien/edit.html.twig', array(
            'bien' => $bien,
            'edit_form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Deletes a bien entity.
     *
     * @Route("/{id}", name="backend_bien_delete")
     * @Method("DELETE")
     */
    public function deleteAction(Request $request, Bien $bien)
    {
        $form = $this->createDeleteForm($bien);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->remove($bien);
            $em->flush();
        }

        return $this->redirectToRoute('backend_bien_index');
    }

    /**
     * Creates a form to delete a bien entity.
     *
     * @param Bien $bien The bien entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm(Bien $bien)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('backend_bien_delete', array('id' => $bien->getId())))
            ->setMethod('DELETE')
            ->getForm()
        ;
    }
}
