import { Star } from 'lucide-react';
import { UserRoundGroup } from 'lucide-react';
import { Sprout } from 'lucide-react';
import { ChartSpline } from 'lucide-react';
import { ShieldCheck } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Heart } from 'lucide-react';
import '../styles/values.css';

export default function Valeurs() {
    return (
        <section className="values-section" id="values">
            <p>Nos valeurs</p>
            <h3>Nos valeurs, notre boussole</h3>
            <p>Elles guident chacune de nos actions et définissent
                la manière dont nous travaillons ensemble.
            </p>

            <div>
                <div>
                    <Star />
                    <p>Excellence</p>
                </div>
                <div>
                    <UserRoundGroup />
                    <p>Solidarité</p>
                </div>
                <div>
                    <Sprout />
                    <p>Humilité</p>
                </div>
                <div>
                    <ChartSpline />
                    <p>Persévérance</p>
                </div>
                <div>
                    <ShieldCheck />
                    <p>Intégrité</p>
                </div>
                <div>
                    <Globe />
                    <p>Responsabilité</p>
                </div>
                <div>
                    <Heart />
                    <p>Engagement</p>
                </div>
            </div>
        </section>
    )
}
