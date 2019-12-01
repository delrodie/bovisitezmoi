<?php

namespace AppBundle\Controller;

use AppBundle\Entity\ProduitImage;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;use Symfony\Component\HttpFoundation\Request;

/**
 * Produitimage controller.
 *
 * @Route("backend/produitimage")
 */
class ProduitImageController extends Controller
{
    /**
     * Lists all produitImage entities.
     *
     * @Route("/", name="backend_produitimage_index")
     * @Method("GET")
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        $produitImages = $em->getRepository('AppBundle:ProduitImage')->findAll();

        return $this->render('produitimage/index.html.twig', array(
            'produitImages' => $produitImages,
        ));
    }

    /**
     * Creates a new produitImage entity.
     *
     * @Route("/new/{produitID}", name="backend_produitimage_new")
     * @Method({"GET", "POST"})
     */
    public function newAction(Request $request, $produitID)
    {
        $em = $this->getDoctrine()->getManager();

        $produitImages = $em->getRepository('AppBundle:ProduitImage')->findBy(['produit'=>$produitID]);
        $produit = $em->getRepository("AppBundle:Produit")->findOneBy(['id'=>$produitID]);
        $produitImage = new Produitimage();
        $form = $this->createForm('AppBundle\Form\ProduitImageType', $produitImage,['produit'=>$produitID]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($produitImage);
            $em->flush();

            return $this->redirectToRoute('backend_produitimage_new', array('produitID' => $produitImage->getProduit()->getId()));
        }

        return $this->render('produitimage/new.html.twig', array(
            'produitImages' => $produitImages,
            'produitImage' => $produitImage,
            'form' => $form->createView(),
            'produit' => $produit,
        ));
    }

    /**
     * Finds and displays a produitImage entity.
     *
     * @Route("/{id}", name="backend_produitimage_show")
     * @Method("GET")
     */
    public function showAction(ProduitImage $produitImage)
    {
        $deleteForm = $this->createDeleteForm($produitImage);

        return $this->render('produitimage/show.html.twig', array(
            'produitImage' => $produitImage,
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Displays a form to edit an existing produitImage entity.
     *
     * @Route("/{id}/edit", name="backend_produitimage_edit")
     * @Method({"GET", "POST"})
     */
    public function editAction(Request $request, ProduitImage $produitImage)
    {
        $em = $this->getDoctrine()->getManager();

        $produitImages = $em->getRepository('AppBundle:ProduitImage')->findBy(['produit'=>$produitImage->getProduit()->getId()]);
        $produit = $em->getRepository("AppBundle:Produit")->findOneBy(['id'=>$produitImage->getProduit()->getId()]);
        $deleteForm = $this->createDeleteForm($produitImage);
        $editForm = $this->createForm('AppBundle\Form\ProduitImageType', $produitImage,['produit'=>$produitImage->getProduit()->getId()]);
        $editForm->handleRequest($request);

        if ($editForm->isSubmitted() && $editForm->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('backend_produitimage_new', array('produitID' => $produitImage->getProduit()->getId()));
        }

        return $this->render('produitimage/edit.html.twig', array(
            'produitImage' => $produitImage,
            'produitImages' => $produitImages,
            'edit_form' => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
            'produit' => $produit,
        ));
    }

    /**
     * Deletes a produitImage entity.
     *
     * @Route("/{id}", name="backend_produitimage_delete")
     * @Method("DELETE")
     */
    public function deleteAction(Request $request, ProduitImage $produitImage)
    {
        $form = $this->createDeleteForm($produitImage);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $produit = $produitImage->getProduit()->getId();
            $em->remove($produitImage);
            $em->flush();
            return $this->redirectToRoute('backend_produitimage_new',['produitID'=>$produit]);
        }

        return $this->redirectToRoute('backend_produitimage_index');
    }

    /**
     * Creates a form to delete a produitImage entity.
     *
     * @param ProduitImage $produitImage The produitImage entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm(ProduitImage $produitImage)
    {
        return $this->createFormBuilder()
            ->setAction($this->generateUrl('backend_produitimage_delete', array('id' => $produitImage->getId())))
            ->setMethod('DELETE')
            ->getForm()
        ;
    }
}
