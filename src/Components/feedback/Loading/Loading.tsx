import { TLoading } from "@customTypes/Shared"

type loadingProps = {
    status: TLoading;
    error: null | string;
    children: React.ReactNode;
}

function Loading({status, error, children }: loadingProps) {
    if(status === "pending") {
        return <>Loading please Wait</>
    }else if (status === "failed") {
        return <>{error}</>
    }else {
        return <>{children}</>
    }
}

export default Loading
