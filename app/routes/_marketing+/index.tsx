import { type MetaFunction } from '@remix-run/node'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '#app/components/ui/tooltip.tsx'
import { logos, stars } from './logos/logos.ts'
import { MapPin, Clock10 } from 'lucide-react'

export const meta: MetaFunction = () => [{ title: 'Blasius Car Site' }]

export default function Index() {
	return (
		<main className="relative  sm:items-center sm:justify-center">

			<div className="relative">
				<div className="mx-auto">
					<div className="relative shadow-xl ">
						<div className="absolute inset-0">
							<img className="h-full w-full object-cover"
                            src="https://di-uploads-development.dealerinspire.com/blasiuspreownedauto/uploads/2023/09/BLASIUS-PRE-OWNED.png" alt="" />
							<div className="absolute inset-0 bg-[color:rgba(30,23,38,0.5)] mix-blend-multiply" />
						</div>
						<div className="lg:pt-18 relative px-4 pb-8 pt-8 sm:px-6 sm:pb-14 sm:pt-16 lg:px-8 lg:pb-20 font-sans
                        drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-black">
							<h1 className="text-center font-bold tracking-tight text-3xl md:text-4xl lg:text-5xl">
									<span className="text-white">Blasius Pre-Owned</span>
							</h1>
							<p className="mx-auto mt-6 max-w-lg text-center text-xl text-white sm:max-w-3xl">
                            Where friends send friends
							</p>
						</div>
					</div>
				</div>
			</div>

            <div className='relative'>
                <div className="h-full max-h-fit grid grid-cols-1 md:grid-cols-2 justify-center justify-items-start md:justify-items-center mx-auto items-center bg-black h-1/2">
                    <div className="text-white justify-center flex flex-col gap-1 md:gap-4 mx-2 mb-3 pl-4 md:pl-0">
                        <h2 className='uppercase text-xl lg:text-2xl mt-4 mb-1 md:mx-auto'>
                            Get Directions
                        </h2>
                        <span className="flex items-center gap-2 my-2 text-sm lg:text-base font-light">
                            <MapPin
                            className="h-4 w-4 md:h-6 md:w-6 lg:h-6 lg:w-6" />
                            {" "}
                            465 Federal Rd, Brookfield, CT 06804
                        </span>
                        <span className="flex items-center gap-2 my-2 text-sm lg:text-base font-light">
                            <Clock10
                            className="h-4 w-4 md:h-6 md:w-6 lg:h-6 lg:w-6" />
                            {" "}
                            <div className='flex flex-col'>
                                <p>Open Today! Sales: 9am-5pm</p>
                                <p>Open Today! Service: 9am-5pm</p>
                            </div>
                        </span>
                    </div>
                    <img
                    className='object-cover max-h-64  w-full order-first md:order-last'
                    src="https://api.mapbox.com/styles/v1/di-sysops/cle6iyspk000301jvzavqrvjp/static/pin-l+1499CE(-73.4056293,41.4596462)/-73.4056293,41.4596462,10,0,0/343x450@2x?access_token=pk.eyJ1IjoiZGktc3lzb3BzIiwiYSI6ImNqMnJzNnRvYTAwOXkzMHBsamE1cTd0OGcifQ.qlCfteKKSMrHmHxG0jahxA"
                    />
                </div>

			</div>
		</main>
	)
}
