import React from "react";
import Card from "./Card";

const HomeCard = () => {
    return (
        <>
            <section className="py-4">
                <div className="container-xl lg:container m-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                        <Card
                            target={"Developers"}
                            description={"Browse our React jobs and start your career today"}
                            title={"Browse Jobs"}
                            color={"bg-gray-100"}
                        />
                        <Card
                            target={"Employers"}
                            description={
                                "List your job to find the perfect developer for the role"
                            }
                            title={"Add Job"}
                            color={"bg-indigo-100"}
                            btnColor="bg-indigo-500"
                            url="/add-job"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeCard;
