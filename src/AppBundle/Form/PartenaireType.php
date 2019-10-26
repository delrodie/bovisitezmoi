<?php

namespace AppBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Vich\UploaderBundle\Form\Type\VichImageType;

class PartenaireType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('nom', TextType::class,['attr'=>['class'=>'form-control', 'placeholder'=>'la raison sociale ou le nom', 'autocomplete'=>"off"]])
            ->add('email', EmailType::class,['attr'=>['class'=>'form-control', 'placeholder'=>"L'adresse email", 'autocomplete'=>"off"], 'required'=>false])
            ->add('contact', TextType::class,['attr'=>['class'=>'form-control', 'autocomplete'=>"off", 'placeholder'=>"Le contact telephonique"], 'required'=>false])
            ->add('adresse', TextType::class,['attr'=>['class'=>'form-control', 'autocomplete'=>"off", 'placeholder'=>"L'adresse géographique"], 'required'=>false])
            ->add('imageFile', VichImageType::class,[
                'required'=> false,
                'allow_delete' => true,
                'label'=>'.'
            ])
            //->add('imageName')->add('imageSize')->add('updatedAt')->add('slug')->add('publiePar')->add('modifiePar')->add('publieLe')->add('modifieLe')
        ;
    }
    
    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'AppBundle\Entity\Partenaire'
        ));
    }

    /**
     * {@inheritdoc}
     */
    public function getBlockPrefix()
    {
        return 'appbundle_partenaire';
    }


}
