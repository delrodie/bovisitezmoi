<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Produit;
use AppBundle\Utilities\GestionBien;
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
     * @Route("/", name="frontend_recherche_categorie")
     * @Method({"GET","POST"})
     */
    public function rechercheAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $slug = $request->get('categorie');
        if ($slug){
            $categorie = $em->getRepository('AppBundle:Categorie')->findOneBy(['slug'=>$slug]);
            $domaine = $em->getRepository("AppBundle:Domaine")->findOneBy(['id'=>$categorie->getDomaine()->getId()]);
            $sliders = $em->getRepository("AppBundle:Caroussel")->findList($domaine->getId());
            $domaines = $em->getRepository("AppBundle:Domaine")->liste()->getQuery()->getResult();
            $biens = $em->getRepository("AppBundle:Bien")->findByCategorie($slug);

            return $this->render('frontend/categorie.html.twig',[
                'domaines' => $domaines,
                'domaine' => $domaine,
                'sliders' => $sliders,
                'biens' => $biens,
            ]);
        }else{
            return $this->redirectToRoute('homepage');
        }
    }

    /**
     * @Route("/{slug}", name="frontend_produit_show")
     * @Method("GET")
     */
    public function produitAction(Produit $produit)
    {
        $em= $this->getDoctrine()->getManager();
        $produits = $em->getRepository("AppBundle:Produit")->findBy(['bien'=>$produit->getBien()->getId()],['id'=>'DESC']);

        return $this->render("frontend/produit.html.twig",[
            'produit' => $produit,
            'produits' => $produits,
        ]);
    }

    /**
     * @Route("/{categorie}/{slug}", name="frontend_bien_show")
     * @Method("GET")
     */
    public function showAction(Request $request, $categorie, $slug, GestionBien $gestionBien)
    {
        $em = $this->getDoctrine()->getManager();
        $bien = $em->getRepository("AppBundle:Bien")->findOneBy(['slug'=>$slug]);
        $produits = $em->getRepository("AppBundle:Produit")->findBy(['bien'=>$bien->getId()],['id'=>'DESC']);
        $gestionBien->addVue($slug); //dump($bien);die();

        return $this->render("frontend/details.html.twig",[
            'bien' => $bien,
            'produits' => $produits,
        ]);
    }
}
