<?php

namespace AppBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Vich\UploaderBundle\Form\Type\VichImageType;

class SliderType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('titre', TextType::class,['attr'=>['class'=>'form-control', 'placeholder'=>"Le titre du slide", 'autocomplete'=>"off"]])
            ->add('dateDebut', TextType::class,['attr'=>['class'=>'js-datepicker form-control', 'placeholder'=>"La date debut d'affichage", 'autocomplete'=>"off"]])
            ->add('dateFin', TextType::class,['attr'=>['class'=>'js-datepicker form-control', 'placeholder'=>"La date fin d'affichage", 'autocomplete'=>"off"]])
            ->add('lien', TextType::class,['attr'=>['class'=>'form-control', 'placeholder'=>"Le lien de la visite guidée", 'autocomplete'=>"off"]])
            ->add('statut', CheckboxType::class,['attr'=>['class'=>''],'required'=>false])
            ->add('imageFile', VichImageType::class,[
                'required'=> false,
                'allow_delete' => true,
                'label'=>'.'
            ])
            //->add('slug')->add('publiePar')->add('modifiePar')->add('publieLe')->add('modifieLe')
        ;
    }
    
    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'AppBundle\Entity\Slider'
        ));
    }

    /**
     * {@inheritdoc}
     */
    public function getBlockPrefix()
    {
        return 'appbundle_slider';
    }


}
