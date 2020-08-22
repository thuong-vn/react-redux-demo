interface Category {
    id: string
    name: string
    icon?: string | null
    posts: number
    created_at: Date
}

export default Category;