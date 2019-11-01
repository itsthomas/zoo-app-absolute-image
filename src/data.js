const jsonResponse = {
  animals: [
    {
      id: 0,
      name: 'Bald Eagle',
      image_url: 'http://www.xmedia-design.com/zoo-app-absolute-image/build/images/eagle.jpg',
      distribution: 'America',
      details: {
        family: 'Accipitridae',
        diet: 'Fish',
        short:
          `The bald eagle (Haliaeetus leucocephalus) is a bird of prey found in North America. 
          A sea eagle, it has two known subspecies and forms a species pair with the white-tailed eagle.`,
        long:
          `The bald eagle (Haliaeetus leucocephalus) is a bird of prey found in North America. 
          A sea eagle, it has two known subspecies and forms a species pair with the white-tailed eagle. 
          Its range includes most of Canada and Alaska, all of the contiguous United States, and northern Mexico. 
          It is found near large bodies of open water with an abundant food supply and old-growth trees for nesting.
          The bald eagle is an opportunistic feeder which subsists mainly on fish, which it swoops down and snatches 
          from the water with its talons. The bald eagle is the national bird of the United States of America.`
      }
    },
    {
      id: 1,
      name: 'African Elephant',
      image_url: 'http://www.xmedia-design.com/zoo-app-absolute-image/build/images/elephant.jpg',
      distribution: 'Africa',
      details: {
        family: 'Elephantidae',
        diet: 'Roots, grasses, fruit',
        short:
          `The African elephant (Loxodonta) is a genus comprising two living elephant species, 
          the African bush elephant and the smaller African forest elephant. 
          Both are herbivores and live in groups.`,
        long:
           `The African elephant (Loxodonta) is a genus comprising two living elephant species, 
           the African bush elephant (L. africana) and the smaller African forest elephant (L. cyclotis). 
           Both are herbivores and live in groups. They have grey skin and differ in the size of their ears and tusks, 
           and in the shape and size of their skulls.
           Both species are listed as Vulnerable species on the IUCN Red List since 2004, and are threatened by 
           habitat loss and fragmentation. Poaching for the illegal ivory trade is a threat in several range countries as well.
           Loxodonta is one of two existing genera of the family Elephantidae. The name refers to the 
           lozenge-shaped enamel of their molar teeth. Fossil remains of Loxodonta species have been 
           excavated in Africa, dating to the middle Pliocene.`
      }
    },
    {
      id: 2,
      name: 'Jaguar',
      image_url: 'http://www.xmedia-design.com/zoo-app-absolute-image/build/images/jaguar.jpg',
      distribution: 'South America',
      details: {
        family: 'Felidae',
        diet: 'Deer, peccary, crocodiles',
        short:
          `The jaguar (Panthera onca) is a large species. The jaguar's present range extends from Southwestern United States 
          and Mexico in North America, across much of Central and South America.`,
        long:
          `The jaguar (Panthera onca) is a large felid species and the only extant member of the genus Panthera 
          native to the Americas. The jaguar's present range extends from Southwestern United States and Mexico 
          in North America, across much of Central America, and south to Paraguay and northern Argentina in South America. 
          Though there are single cats now living within the Western United States, the species has largely been 
          extirpated from the United States since the early 20th century. It is listed as Near Threatened on the 
          IUCN Red List; and its numbers are declining. Threats include loss and fragmentation of habitat.
          Overall, the jaguar is the largest native cat species of the New World and the third largest in the world. 
          This spotted cat closely resembles the leopard, but is usually larger and sturdier. 
          It ranges across a variety of forested and open terrains, but its preferred habitat is tropical and 
          subtropical moist broadleaf forest, swamps and wooded regions.`
      }
    },
    {
      id: 3,
      name: 'African Lion',
      image_url: 'http://www.xmedia-design.com/zoo-app-absolute-image/build/images/lion.jpg',
      distribution: 'Africa',
      details: {
        family: 'Felidae',
        diet: 'Antelopes, buffaloes, zebras',
        short:
          `The lion (Panthera leo) is a species in the family Felidae; it is a muscular, deep-chested cat with a short, 
          rounded head, and a hairy tuft at the end of its tail. 
          Male lions have a prominent mane, which is the most recognisable feature of the species.`,
        long:
          `The lion (Panthera leo) is a species in the family Felidae; it is a muscular, deep-chested cat with a short, 
          rounded head, a reduced neck and round ears, and a hairy tuft at the end of its tail. It is sexually dimorphic; 
          male lions have a prominent mane, which is the most recognisable feature of the species. With a typical head-to-body 
          length of 184–208 cm (72–82 in) they are larger than females at 160–184 cm (63–72 in). It is a social species, 
          forming groups called prides. A lion pride consists of a few adult males, related females and cubs. 
          Groups of female lions usually hunt together, preying mostly on large ungulates. 
          The lion is an apex and keystone predator, although some lions scavenge when opportunities occur, and have been 
          known to hunt humans, although the species typically does not.
          It has been listed as Vulnerable on the IUCN Red List since 1996 because populations in African countries have declined by 
          about 43% since the early 1990s.`
      }
    },
    {
      id: 4,
      name: 'Bengal Tiger',
      image_url: 'http://www.xmedia-design.com/zoo-app-absolute-image/build/images/tiger.jpg',
      distribution: 'India',
      details: {
        family: 'Felidae',
        diet: 'Chital, sambar, gaur',
        short:
          `The Bengal tiger is a Panthera tigris tigris population native to the Indian subcontinent.
          It is threatened by poaching, loss, and fragmentation of habitat, and was estimated at comprising 
          fewer than 2,500 individuals by 2011.`,
        long:
          `The Bengal tiger is a Panthera tigris tigris population native to the Indian subcontinent.
          It is threatened by poaching, loss, and fragmentation of habitat, and was estimated at comprising 
          fewer than 2,500 individuals by 2011. None of the Tiger Conservation Landscapes within its range is 
          considered large enough to support an effective population of more than 250 adult individuals.
          India's tiger population was estimated at 1,706–1,909 individuals in 2010.
          By 2018, the population had increased to an estimated 2,603–3,346 individuals.
          Around 440 tigers are estimated in Bangladesh, 163–253 tigers in Nepal and 103 tigers in Bhutan.`
      }
    },
    {
      id: 5,
      name: 'Zebra',
      image_url: 'http://www.xmedia-design.com/zoo-app-absolute-image/build/images/zebra.jpg',
      distribution: 'Africa',
      details: {
        family: 'Equidae',
        diet: 'Variety of grasses',
        short:
          `Zebras are several species of African equids (horse family).
          Their stripes come in different patterns, unique to each individual.
          There are three species of zebras: the plains zebra, the mountain zebra and the Grévy's zebra.`,
        long:
          `Zebras are several species of African equids (horse family) 
          united by their distinctive black-and-white striped coats. Their stripes come in different patterns, 
          unique to each individual. They are generally social animals that live in small harems to large herds. 
          Unlike their closest relatives, horses and donkeys, zebras have never been truly domesticated.
          There are three species of zebras: the plains zebra, the mountain zebra and the Grévy's zebra. 
          The plains zebra and the mountain zebra belong to the subgenus Hippotigris, while Grévy's zebra is the 
          sole species of subgenus Dolichohippus.`
      }
    }
  ]
}

export default jsonResponse
