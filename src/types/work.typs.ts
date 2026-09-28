
export interface IFitlog {
    id: number,
    name: string,
    image: string,
    muscleGroups: string [],
    equipment: "Barbell, Bench",
    difficulty: "Intermediate",
    duration: number,
    caloriesBurned: number,
    sets: number,
    reps: number,
    rating: number,
    description: string,
    instructions: string []
}