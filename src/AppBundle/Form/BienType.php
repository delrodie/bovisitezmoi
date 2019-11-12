<?php

namespace AppBundle\Form;

use Doctrine\ORM\EntityRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Vich\UploaderBundle\Form\Type\VichImageType;

class BienType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('titre', TextType::class,['attr'=>['class'=>'form-control', 'autocomplete'=>"off", 'placeholder'=>"Le titre du bien"]])
            ->add('description', TextareaType::class,['attr'=>['class'=>'form-control summernote', 'style' => 'width: 100%; height: 200px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;'], 'required'=>false])
            ->add('adresse', TextType::class,['attr'=>['class'=>'form-control', 'autocomplete'=>"off", 'placeholder'=>"L'adresse géographie"], 'required'=>false])
            ->add('telephone', TextType::class,['attr'=>['class'=>'form-control', 'autocomplete'=>"off", 'placeholder'=>"Le contcat téléphonique"], 'required'=>false])
            ->add('website', TextType::class,['attr'=>['class'=>'form-control', 'autocomplete'=>"off", 'placeholder'=>"Le site internet"], 'required'=>false])
            ->add('prix', IntegerType::class,['attr'=>['class'=>'form-control', 'autocomplete'=>"off", 'placeholder'=>"Le prix"], 'required'=>false])
            ->add('visiteDossier', TextType::class,['attr'=>['class'=>'form-control', 'placeholder'=>"Le dossier de la visite", 'autocomplete'=>"off"], 'required'=>false])
            ->add('visiteLien', TextType::class,['attr'=>['class'=>'form-control', 'placeholder'=>"Le lien de la visite", 'autocomplete'=>"off"], 'required'=>false])
            ->add('tags', TextType::class,['attr'=>['class'=>'form-control tag-input', 'placeholder'=>"Les mots clés", 'autocomplete'=>"off",'data-role' => "tagsinput",], 'required'=>true])
            ->add('debutPromo', TextType::class,['attr'=>['class'=>'js-datepicker form-control', 'placeholder'=>"La date debut de la promotion", 'autocomplete'=>"off"], 'required'=>false])
            ->add('finPromo', TextType::class,['attr'=>['class'=>'js-datepicker form-control', 'placeholder'=>"La date fin de la promotion", 'autocomplete'=>"off"], 'required'=>false])
            ->add('googleMap', TextType::class,['attr'=>['class'=>'form-control', 'placeholder'=>"Lien google map", 'autocomplete'=>"off"], 'required'=>false])
            ->add('affichagePrix', ChoiceType::class,[
                'choices'=>['OUI'=>true, 'NON'=>false],
                'attr'=>['class'=>'form-control']
            ])
            ->add('imageFile', VichImageType::class,[
                'required'=> false,
                'allow_delete' => true,
                'label'=>'.'
            ])
            //->add('imageSize')->add('updatedAt')->add('slug')->add('publiePar')->add('modifiePar')->add('publieLe')->add('modifieLe')
            ->add('mode', EntityType::class,[
                'attr'=>['class'=>'form-control js-select2'],
                'class'=> 'AppBundle:Mode',
                'query_builder'=> function(EntityRepository $er){
                    return $er->liste();
                },
                'choice_label' =>'libelle'
            ])
            ->add('partenaire', EntityType::class,[
                'attr'=>['class'=>'form-control js-select2'],
                'class'=> 'AppBundle:Partenaire',
                'query_builder'=> function(EntityRepository $er){
                    return $er->liste();
                },
                'choice_label' =>'nom'
            ])
            ->add('categorie', EntityType::class,[
                'attr'=>['class'=>'form-control js-select2', 'style'=>"width:350px; height:50px"],
                'class'=> 'AppBundle:Categorie',
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
            'data_class' => 'AppBundle\Entity\Bien'
        ));
    }

    /**
     * {@inheritdoc}
     */
    public function getBlockPrefix()
    {
        return 'appbundle_bien';
    }


}
