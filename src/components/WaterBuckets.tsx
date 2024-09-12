export default function WaterBuckets({ buckets }) {
    const maxCapacities = [8, 5, 3];
    return (
        <div className="flex justify-around mb-6">
            {buckets.map((amount, index) => (
                <div key={index} className="text-center">
                    <div className="w-20 h-40 bg-white border-2 border-blue-500 relative mx-auto">
                        <div
                            className="absolute bottom-0 left-0 right-0 bg-blue-500 transition-all duration-300 ease-in-out"
                            style={{ height: `${(amount / maxCapacities[index]) * 100}%` }}
                        ></div>
                    </div>
                    <p className="mt-2">
                        {amount}L / {maxCapacities[index]}L
                    </p>
                </div>
            ))}
        </div>
    )
}
