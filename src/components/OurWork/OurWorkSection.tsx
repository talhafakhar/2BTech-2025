import React, {useState} from "react";

interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Vasl",
        category: "Social Media Marketing",
        description: "Social media campaign",
        image: "/assets/ourWork/vasl-1.webp"
    },
    {
        id: 2,
        title: "TF",
        category: "Social Media Marketing",
        description: "Consulting company",
        image: "/assets/ourWork/tf-1.webp"
    },
    {
        id: 3,
        title: "Shop Your Z",
        category: "Social Media Marketing",
        description: "E-commerce marketing",
        image: "/assets/ourWork/shopyourz.webp"
    },
    {
        id: 4,
        title: "Red Fluffy",
        category: "Social Media Marketing",
        description: "Pet care brand",
        image: "/assets/ourWork/red-fluffy.webp"
    },
    {
        id: 5,
        title: "OTG",
        category: "Social Media Marketing",
        description: "Food delivery service",
        image: "/assets/ourWork/otg.webp"
    },
    {
        id: 6,
        title: "Maxima-Nutritions",
        category: "Social Media Marketing",
        description: "Nutrition brand",
        image: "/assets/ourWork/Maxima-Nutritions.webp"
    },
    {
        id: 7,
        title: "Italian Moda",
        category: "Social Media Marketing",
        description: "Fashion brand",
        image: "/assets/ourWork/ItalianModa.webp"
    },
    {
        id: 8,
        title: "GS Mango",
        category: "Social Media Marketing",
        description: "Fruit branding visuals",
        image: "/assets/ourWork/GS-mango.webp"
    },
    {
        id: 9,
        title: "Grit",
        category: "Social Media Marketing",
        description: "Fashion brand extension",
        image: "/assets/ourWork/grit-1.webp"
    },
    {
        id: 10,
        title: "Digital-Rulers",
        category: "Social Media Marketing",
        description: "Digital strategy agency",
        image: "/assets/ourWork/Digital-Rulers.webp"
    },
    {
        id: 11,
        title: "Ayeqan",
        category: "Social Media Marketing",
        description: "Mobile app promotion",
        image: "/assets/ourWork/ayeqan.webp"
    },
    {
        id: 12,
        title: "Ruby And Luna",
        category: "Web Development",
        description: "Beauty & skincare site",
        image: "/assets/ourWork/rubyandluna.webp"
    },
    {
        id: 13,
        title: "Watt Analytics",
        category: "Web Development",
        description: "Energy analytics platform",
        image: "/assets/ourWork/watt-analytics.webp"
    },
    {
        id: 14,
        title: "RMS 360 Solutions",
        category: "Web Development",
        description: "Corporate web dashboard",
        image: "/assets/ourWork/rms-2.webp"
    },
    {
        id: 15,
        title: "Grit Coaches Web",
        category: "Web Development",
        description: "Fashion brand design",
        image: "/assets/ourWork/grit.webp"
    },
    {
        id: 16,
        title: "Tribe",
        category: "Web Development",
        description: "Agency design project",
        image: "/assets/ourWork/tribe35-1.webp"
    },
    {
        id: 17,
        title: "XA Interactive",
        category: "Web Development",
        description: "Digital agency website",
        image: "/assets/ourWork/xainteractive.webp"
    },
    {
        id: 18,
        title: "Secret Passage Studios",
        category: "Web Development",
        description: "Studio branding UI",
        image: "/assets/ourWork/secretpassagestudios.webp"
    },
    {
        id: 19,
        title: "Skeepers",
        category: "Web Development",
        description: "Web solution agency UI",
        image: "/assets/ourWork/skeepers-.webp"
    },
    {
        id: 20,
        title: "Burnt Whiskey",
        category: "Web Development",
        description: "Liquor brand packaging",
        image: "/assets/ourWork/burntwhiskey.webp"
    },
    {
        id: 21,
        title: "MePlanet",
        category: "Web Development",
        description: "Streaming service UI",
        image: "/assets/ourWork/meplanetplus.webp"
    },
    {
        id: 22,
        title: "Pandora Egypt",
        category: "Web Development",
        description: "Jewelry brand site",
        image: "/assets/ourWork/pandoraegypt.webp"
    },
    {
        id: 23,
        title: "Body Factory",
        category: "Web Development",
        description: "Fitness & wellness website",
        image: "/assets/ourWork/bodyfactory.webp"
    },
    {
        id: 24,
        title: "Clickinn Digital",
        category: "Web Development",
        description: "Digital marketing firm",
        image: "/assets/ourWork/clickinndigital.webp"
    },
    {
        id: 25,
        title: "Trendizmo",
        category: "Web Development",
        description: "Digital marketing firm",
        image: "/assets/ourWork/clickinndigital.webp"
    },
    {
        id: 26,
        title: "Soccer10",
        category: "Web Development",
        description: "Sports site & stats UI",
        image: "/assets/ourWork/soccer10.webp"
    },
    {
        id: 27,
        title: "Joseph Joseph",
        category: "Web Development",
        description: "Personal portfolio UI",
        image: "/assets/ourWork/josephjoseph.webp"
    },
    {
        id: 28,
        title: "Wright Waynz",
        category: "Web Development",
        description: "Responsive business website",
        image: "/assets/ourWork/wrightwaynz.webp"
    },
    {
        id: 29,
        title: "Elitestore",
        category: "Web Development",
        description: "E-commerce website UI",
        image: "/assets/ourWork/elitestore.webp"
    },
    {
        id: 30,
        title: "Gazillioncapital",
        category: "Web Development",
        description: "Capital investment platform",
        image: "/assets/ourWork/gazillioncapital.webp"
    },
    {
        id: 31,
        title: "TF",
        category: "Web Development",
        description: "Capital investment platform",
        image: "/assets/ourWork/tf.webp"
    },
    {
        id: 32,
        title: "Abacus",
        category: "UI/UX Design",
        description: "Mobile app promotion",
        image: "/assets/ourWork/Abacus-1.webp"
    },
    {
        id: 39,
        title: "TF",
        category: "UI/UX Design",
        description: "Consulting company",
        image: "/assets/ourWork/tf-2.webp"
    },
    {
        id: 33,
        title: "Ja",
        category: "UI/UX Design",
        description: "Clean and modern UI",
        image: "/assets/ourWork/JA.webp"
    },
    {
        id: 34,
        title: "Orange-Fox",
        category: "UI/UX Design",
        description: "Creative agency web UI",
        image: "/assets/ourWork/Orange-Fox.webp"
    },
    {
        id: 35,
        title: "Plantee",
        category: "UI/UX Design",
        description: "Website UI/UX Design",
        image: "/assets/ourWork/plantee.webp"
    },
    {
        id: 36,
        title: "TF",
        category: "UI/UX Design",
        description: "Gaming UI design",
        image: "/assets/ourWork/tf-2.webp"
    },
    {
        id: 37,
        title: "Rackets",
        category: "UI/UX Design",
        description: "Sports equipment store",
        image: "/assets/ourWork/rackets.webp"
    },
    {
        id: 38,
        title: "Restaurant",
        category: "UI/UX Design",
        description: "Restaurant web design",
        image: "/assets/ourWork/resturant.webp"
    },
]


const categories = ["All", "Social Media Marketing", "UI/UX Design", "Web Development"];
const Portfolio: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProjects =
        selectedCategory === "All"
            ? projects
            : projects.filter((project) => project.category === selectedCategory);

    return (
        <div className="px-6 py-10 max-w-7xl mx-auto">
            <div className="flex gap-6 mb-10">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-2 font-medium  ${
                            selectedCategory === cat
                                ? "bg-primary text-white -rotate-3 transform duration-300 transition-all"
                                : "text-black"
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {filteredProjects.map((project) => (
                    <div key={project.id} className="bg-white border  rounded shadow-md overflow-hidden">
                        <div className="relative">
                            <img src={project.image} alt={project.title} className="w-full h-64 object-cover"/>
                        </div>
                        <div className="p-4">
                            <h3 className="font-bold text-lg">{project.title}</h3>
                            <p className="text-gray-500 text-sm">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
