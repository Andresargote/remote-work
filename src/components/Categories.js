import styles from "./styles/Categories.module.css";

const worksCategories = [
    { 
        name: "Progamación",
        icon: "💻",
    },
    { 
        name: "Marketing",
        icon: "📈",
    },
    {
        name: "Diseño",
        icon: "🎨",
    },
    {
        name: "Ventas",
        icon: "🤑",
    },
    {
        name: "Soporte",
        icon: "🎧",
    },
    {
        name: "No técnicos",
        icon: "✍️",
    }
]

export default function Categories(){
    return (
        <nav className={styles.navegation}>   
            <ul className={styles.list}>
                {
                    worksCategories.map((list, i) => {
                        return (
                            <li key={i}>
                                <span className={styles.icon}>{list.icon}</span>
                                <span>{list.name}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}