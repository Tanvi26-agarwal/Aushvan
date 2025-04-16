import oakimage from '../../assets/oakimage.png';
import aleovera from '../../assets/aleoveraplant.png';
import apple from '../../assets/appleplant.png';
import avacado from '../../assets/avacadoplant.png';
import basil from '../../assets/basil.png';
import beebalm from '../../assets/beebalm.png';
import birch from '../../assets/birchplant.png';
import cardamom from '../../assets/cardamomplant.png';
import cedar from '../../assets/cedarplant.png';
import chemomile from '../../assets/chemomileplant.png';
import cherry from '../../assets/cherryplant.png';
import cilantro from '../../assets/cilantroplant.png';
import coconut from '../../assets/coconutplant.png';
import dandelion from '../../assets/dandelionplant.png';
import echinacea from '../../assets/echinaceaplant.png';
import elderberry from '../../assets/elderberry.png';
import eucalyptus from '../../assets/eucalyptusplant.png';
import fennel from '../../assets/fennelplant.png';
import fig from '../../assets/figplant.png';
import ginger from '../../assets/gingerplant.png';
import ginseng from '../../assets/ginseng.png';
import goldenrod from '../../assets/goldenrod.png';
import hawthorn from '../../assets/hawthorn.png';
import hibiscus from '../../assets/hibiscus.png';
import jasmine from '../../assets/jasmine.png';
import lavendar from '../../assets/lavendarplant.png';
import lemon from '../../assets/lemonbalm.png';
import licorice from '../../assets/licoriceplant.png';
import mango from '../../assets/mangoplant.png';
import maple from '../../assets/mapleplant.png';
import marigold from '../../assets/marigold.png';
import marshmellow from '../../assets/marshmellow.png';
import mullein from '../../assets/mullein.png';
import neem from '../../assets/neemplant.png';
import olive from '../../assets/oliveplant.png';
import oregano from '../../assets/oregano.png';
import papaya from '../../assets/papayaplant.png';
import passion from '../../assets/passionflower.png';
import pepper from '../../assets/peppermintplant.png';
import pine from '../../assets/pineplant.png';
import pomegranate from '../../assets/pomegranateplant.png';
import rhodiola from '../../assets/rhodiola.png';
import rosemary from '../../assets/rosemaryplant.png';
import saw from '../../assets/sawpalmetto.png';
import schisandra from '../../assets/schisandra.png';
import thyme from '../../assets/thymeplant.png';
import tulsi from '../../assets/tulsiplant.png';
import turmeric from '../../assets/turmericplant.png';
import walnut from '../../assets/walnutplant.png';
import willow from '../../assets/willowplant.png';
import wort from '../../assets/wort.png';
import yarrow from '../../assets/yarrow.png';


function HerbsInformation(){
    const trees = [
        [oakimage, "Oak", "Quercus robur", "Temperate", "Leaves, Bark", "Oak is used for its strong timber and has various medicinal uses for skin conditions."],
        [maple, "Maple", "Acer saccharum", "Temperate", "Sap, Leaves", "Maple syrup is made from its sap, and its leaves have anti-inflammatory properties."],
        [pine, "Pine", "Pinus sylvestris", "Temperate", "Needles, Resin", "Pine needles are used for respiratory issues and the resin for wounds."],
        [cherry, "Cherry", "Prunus avium", "Temperate", "Fruit, Bark", "Cherry bark has been used for coughs and the fruit is rich in antioxidants."],
        [apple, "Apple", "Malus domestica", "Temperate", "Fruit, Leaves", "Apples are used for their antioxidant properties and as a source of vitamins."],
        [cedar, "Cedar", "Cedrus libani", "Temperate", "Wood, Resin", "Cedar wood is used for its durability and the resin for medicinal purposes."],
        [birch, "Birch", "Betula pendula", "Temperate", "Bark, Leaves", "Birch bark is used for its anti-inflammatory properties and the leaves for urinary tract health."],
        [walnut, "Walnut", "Juglans regia", "Temperate", "Nuts, Leaves", "Walnut nuts are rich in omega-3s and the leaves have antimicrobial properties."],
        [willow, "Willow", "Salix alba", "Temperate", "Bark", "Willow bark is known for its pain-relieving properties and is used as an anti-inflammatory."],
        [eucalyptus, "Eucalyptus", "Eucalyptus globulus", "Tropical", "Leaves", "Eucalyptus leaves are used for respiratory issues and have antiseptic properties."],
        [mango, "Mango", "Mangifera indica", "Tropical", "Fruit, Leaves", "Mangoes are rich in vitamins and the leaves are used in traditional medicine for diabetes."],
        [papaya, "Papaya", "Carica papaya", "Tropical", "Fruit, Leaves", "Papaya is used for digestion and its leaves have anti-inflammatory effects."],
        [fig, "Fig", "Ficus carica", "Mediterranean", "Fruit, Leaves", "Fig fruit is used for digestive health and leaves for their anti-inflammatory properties."],
        [pomegranate, "Pomegranate", "Punica granatum", "Mediterranean", "Fruit, Peel", "Pomegranate is known for its antioxidant properties and the peel is used for digestive health."],
        [olive, "Olive", "Olea europaea", "Mediterranean", "Fruit, Leaves", "Olive oil is used for heart health, and leaves have anti-inflammatory properties."],
        [avacado, "Avocado", "Persea americana", "Tropical", "Fruit", "Avocado is rich in healthy fats and used for skin health."],
        [coconut, "Coconut", "Cocos nucifera", "Tropical", "Fruit, Oil", "Coconut is used for its oil and has various health benefits including hydration and digestion."],
        [neem, "Neem", "Azadirachta indica", "Tropical", "Leaves, Bark", "Neem has antibacterial properties and is used in treating skin conditions."],
        [tulsi, "Tulsi", "Ocimum sanctum", "Tropical", "Leaves", "Tulsi is known for its immune-boosting and anti-inflammatory properties."],
        [aleovera, "Aloe Vera", "Aloe barbadensis", "Tropical", "Gel, Leaves", "Aloe Vera is used for its skin-soothing and healing properties."],
        [ginger, "Ginger", "Zingiber officinale", "Tropical", "Root", "Ginger helps in digestion and has anti-nausea effects."],
        [turmeric, "Turmeric", "Curcuma longa", "Tropical", "Root", "Turmeric is known for its anti-inflammatory and antioxidant properties."],
        [pepper, "Peppermint", "Mentha piperita", "Temperate", "Leaves", "Peppermint is used for relieving digestive issues and headaches."],
        [lavendar, "Lavender", "Lavandula angustifolia", "Temperate", "Flowers", "Lavender is used for its calming and stress-relieving properties."],
        [rosemary, "Rosemary", "Rosmarinus officinalis", "Mediterranean", "Leaves", "Rosemary is used for improving memory and relieving muscle pain."],
        [thyme, "Thyme", "Thymus vulgaris", "Mediterranean", "Leaves", "Thyme has antibacterial properties and is used to treat coughs and colds."],
        [chemomile, "Chamomile", "Matricaria chamomilla", "Temperate", "Flowers", "Chamomile is known for its calming effects and helps with insomnia."],
        [echinacea, "Echinacea", "Echinacea purpurea", "Temperate", "Leaves, Flowers", "Echinacea is used to boost the immune system and treat infections."],
        [ginseng, "Ginseng", "Panax ginseng", "Temperate", "Root", "Ginseng helps in boosting energy and reducing stress."],
        [dandelion, "Dandelion", "Taraxacum officinale", "Temperate", "Leaves, Root", "Dandelion is used for liver detoxification and as a diuretic."],
        [licorice, "Licorice", "Glycyrrhiza glabra", "Temperate", "Root", "Licorice root is used for soothing digestive issues and sore throats."],
        [fennel, "Fennel", "Foeniculum vulgare", "Mediterranean", "Seeds, Bulb", "Fennel seeds are used to aid digestion and reduce bloating."],
        [cardamom, "Cardamom", "Elettaria cardamomum", "Tropical", "Seeds", "Cardamom is used for digestive issues and has antimicrobial properties."],
        [cilantro, "Cilantro", "Coriandrum sativum", "Mediterranean", "Leaves, Seeds", "Cilantro is known for its detoxifying and digestive health benefits."],
        [oregano, "Oregano", "Origanum vulgare", "Mediterranean", "Leaves", "Oregano is used for its antioxidant properties and to treat respiratory conditions."],
        [basil, "Basil", "Ocimum basilicum", "Tropical", "Leaves", "Basil is used for its anti-inflammatory and antioxidant benefits."],
        [marigold, "Marigold", "Calendula officinalis", "Temperate", "Flowers", "Marigold is used to treat wounds and as an anti-inflammatory agent."],
        [jasmine, "Jasmine", "Jasminum officinale", "Temperate", "Flowers", "Jasmine is used for its calming properties and to treat skin conditions."],
        [hibiscus, "Hibiscus", "Hibiscus rosa-sinensis", "Tropical", "Flowers", "Hibiscus is known for its antioxidant properties and is used to lower blood pressure."],
        [passion, "Passionflower", "Passiflora incarnata", "Tropical", "Flowers, Leaves", "Passionflower is used for its calming effects and to treat anxiety."],
        [saw, "Saw Palmetto", "Serenoa repens", "Tropical", "Berries", "Saw Palmetto is used to treat symptoms of benign prostatic hyperplasia."],
        [ginger, "Ginger", "Zingiber officinale", "Tropical", "Root", "Ginger aids digestion and is used to treat nausea and inflammation."],
        [basil, "Holy Basil", "Ocimum tenuiflorum", "Tropical", "Leaves", "Holy Basil is used for its stress-relieving and immune-boosting properties."],
        [schisandra, "Schisandra", "Schisandra chinensis", "Temperate", "Berries", "Schisandra is used for its adaptogenic properties and liver health."],
        [rhodiola, "Rhodiola", "Rhodiola rosea", "Temperate", "Root", "Rhodiola is known for its stress-reducing and fatigue-fighting properties."],
        [hawthorn, "Hawthorn", "Crataegus monogyna", "Temperate", "Berries, Leaves", "Hawthorn is used for cardiovascular health and to improve blood flow."],
        [lemon, "Lemon Balm", "Melissa officinalis", "Temperate", "Leaves", "Lemon Balm is used for its calming effects and to alleviate digestive issues."],
        [yarrow, "Yarrow", "Achillea millefolium", "Temperate", "Leaves, Flowers", "Yarrow is used for its anti-inflammatory and wound-healing properties."],
        [wort, "St. John’s Wort", "Hypericum perforatum", "Temperate", "Leaves, Flowers", "St. John’s Wort is used to treat depression and anxiety."],
        [mullein, "Mullein", "Verbascum thapsus", "Temperate", "Leaves, Flowers", "Mullein is used for respiratory health and to soothe coughs."],
        [marshmellow, "Marshmallow", "Althaea officinalis", "Temperate", "Root, Leaves", "Marshmallow is used to soothe mucous membranes and treat coughs."],
        [elderberry, "Elderberry", "Sambucus nigra", "Temperate", "Berries, Flowers", "Elderberry is used for its immune-boosting and antiviral properties."],
        [goldenrod, "Goldenrod", "Solidago canadensis", "Temperate", "Flowers", "Goldenrod is used to treat urinary tract infections and inflammation."],
        [beebalm, "Bee Balm", "Monarda didyma", "Temperate", "Leaves, Flowers", "Bee Balm is used for its antibacterial properties and to relieve stress."],
    ]
    

    return trees;
}

export default HerbsInformation;