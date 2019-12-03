<?php

namespace AppBundle\Form;

use Doctrine\ORM\EntityRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Vich\UploaderBundle\Form\Type\VichImageType;

class ProduitType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $this->bien = $options['bien'];
        $bien = $this->bien;

        $builder
            //->add('reference', TextType::class,['attr'=>['class'=>"form-control", 'placeholder'=>"La reference du produit", 'autocomplete'=>"off"]])
            ->add('description')
            ->add('tags', TextType::class,['attr'=>['class'=>'form-control tag-input', 'placeholder'=>"Les mots clés", 'autocomplete'=>"off",'data-role' => "tagsinput",], 'required'=>true])
            ->add('marque', TextType::class,['attr'=>['class'=>"form-control", 'placeholder'=>"La marque du produit", 'autocomplete'=>"off"]])
            ->add('prix', IntegerType::class,['attr'=>['class'=>"form-control",'placeholder'=>"Le prix du produit"]])
            ->add('imageFile', VichImageType::class,['required'=> false,'allow_delete' => true,'label'=>'.'])
            //->add('imageName')->add('imageSize')->add('updatedAt')
            ->add('mode', EntityType::class,[
                'attr'=>['class'=>'form-control js-select2'],
                'class'=> 'AppBundle:Mode',
                'query_builder'=> function(EntityRepository $er){
                    return $er->liste();
                },
                'choice_label' =>'libelle'
            ])
            ->add('bien', EntityType::class, array(
                    'attr'  => array(
                        'class' => 'form-control',
                        'autocomplete'  => 'off'
                    ),
                    'class' => 'AppBundle:Bien',
                    'query_builder' =>  function(EntityRepository $er) use($bien){
                        return $er->findBien($bien);
                    },
                    'choice_label'  => 'titre',
                )
            )
            ->add('famille', EntityType::class,[
                'attr'=>['class'=>'form-control js-select2'],
                'class'=> 'AppBundle:Famille',
                'query_builder'=> function(EntityRepository $er){
                    return $er->liste();
                },
                'choice_label' =>'libelle'
            ])
        ;
    }
    
    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'AppBundle\Entity\Produit',
            'bien'  => null,
        ));
    }

    /**
     * {@inheritdoc}
     */
    public function getBlockPrefix()
    {
        return 'appbundle_produit';
    }


}
