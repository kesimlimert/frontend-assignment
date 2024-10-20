import Image from "next/image";
import React from "react";

interface TeamMember {
  name: string;
  desc: string;
  image: string;
}

export async function Team() {
  const NEXT_PUBLIC_API_URL = process.env.VERCEL_URL || 'http://localhost:3000';
  const data = await fetch(`${NEXT_PUBLIC_API_URL}/api/team`);
  const team: TeamMember[] = await data.json();

  return (
    <div className="pt-56 pb-28 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member: TeamMember, index: number) => (
          <React.Fragment key={member.name}>
            <div className="bg-white p-12 rounded-lg shadow-lg">
              <Image
                src={member.image}
                alt={member.name}
                className="rounded-full mx-auto mb-4"
                width={200}
                height={200}
              />
              <h3 className="text-sm md:text-md-sm pt-2 text-dark lg:text-lg-sm font-semibold text-center">
                {member.name}
              </h3>
              <p className="text-center text-xs text-dark md:text-md-xs lg:text-lg-xs text-gray-600">
                {member.desc}
              </p>
            </div>
            {index === 1 && (
              <div className="flex flex-col justify-center">
                <h2 className="text-2xl md:text-md-2xl text-dark lg:text-lg-2xl font-bold">
                  Our Team
                </h2>
                <p className="text-subheader md:text-md-subheader text-dark lg:text-lg-subheader text-left mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                  rutrum donec ultricies eras id ac.
                </p>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
