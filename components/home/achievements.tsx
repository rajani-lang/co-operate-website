    import { achievements } from "@/lib/mock-data"

    export default function Achievements() {
      return (
        <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground font-serif sm:text-4xl">Our Achievements</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Building trust through consistent performance and excellence
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {achievements.map((achievement) => (
                <div key={achievement.id} className="text-center">
                  <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-primary/10 border-4 border-primary/20 mb-4">
                    <span className="text-4xl font-bold text-primary">{achievement.value}</span>
                  </div>
                  <p className="text-lg font-medium text-foreground">{achievement.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )
    }
