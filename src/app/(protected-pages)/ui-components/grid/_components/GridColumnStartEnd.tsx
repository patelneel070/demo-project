import DemoBoxContent from '@/components/docs/DemoBoxContent'

const GridColumnStartEnd = () => {
    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="...">
                <DemoBoxContent className="bg-indigo-300 ">
                    01
                </DemoBoxContent>
            </div>
            <div className="...">
                <DemoBoxContent className="bg-indigo-300 ">
                    02
                </DemoBoxContent>
            </div>
            <div className="...">
                <DemoBoxContent className="bg-indigo-300 ">
                    03
                </DemoBoxContent>
            </div>
            <div className="col-span-2 ...">
                <DemoBoxContent className="shadow-lg bg-indigo-500">
                    04
                </DemoBoxContent>
            </div>
            <div className="...">
                <DemoBoxContent className="bg-indigo-300 ">
                    05
                </DemoBoxContent>
            </div>
            <div className="...">
                <DemoBoxContent className="bg-indigo-300 ">
                    06
                </DemoBoxContent>
            </div>
            <div className="col-span-2 ...">
                <DemoBoxContent className="shadow-lg bg-indigo-500">
                    07
                </DemoBoxContent>
            </div>
        </div>
    )
}

export default GridColumnStartEnd
