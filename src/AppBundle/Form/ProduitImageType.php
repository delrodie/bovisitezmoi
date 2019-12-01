<?php

namespace AppBundle\Form;

use Doctrine\ORM\EntityRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Vich\UploaderBundle\Form\Type\VichImageType;

class ProduitImageType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $this->produit = $options['produit'];
        $produit = $this->produit;

        $builder
            ->add('imageFile', VichImageType::class,[
                'required'=> false,
                'allow_delete' => true,
                'label'=>'.'
            ])
            //->add('imageSize')->add('updatedAt')->add('publiePar')->add('modifiePar')->add('publieLe')->add('modifieLe')
            ->add('produit', EntityType::class, array(
                    'attr'  => array(
                        'class' => 'form-control',
                        'autocomplete'  => 'off'
                    ),
                    'class' => 'AppBundle:Produit',
                    'query_builder' =>  function(EntityRepository $er) use($produit){
                        return $er->findProduit($produit);
                    },
                    'choice_label'  => 'reference',
                )
            )
        ;
    }
    
    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'AppBundle\Entity\ProduitImage',
            'produit'  => null,
        ));
    }

    /**
     * {@inheritdoc}
     */
    public function getBlockPrefix()
    {
        return 'appbundle_produitimage';
    }


}
