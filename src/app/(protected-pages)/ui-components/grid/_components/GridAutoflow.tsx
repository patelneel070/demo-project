import DemoBoxContent from '@/components/docs/DemoBoxContent'

const GridAutoflow = () => {
    return (
        <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-4">
            <DemoBoxContent className="col-span-2 bg-purple-300 ">
                01
            </DemoBoxContent>
            <DemoBoxContent className="col-span-2 bg-purple-300 ">
                02
            </DemoBoxContent>
            <DemoBoxContent className="shadow-lg bg-purple-500">
                03
            </DemoBoxContent>
            <DemoBoxContent className="bg-purple-300 ">
                04
            </DemoBoxContent>
            <DemoBoxContent className="bg-purple-300 ">
                05
            </DemoBoxContent>
        </div>
    )
}

export default GridAutoflow
