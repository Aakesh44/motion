"use client";

import React from 'react';
import {AppProgressProvider} from "@bprogress/next";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <AppProgressProvider
            color="#ffffff"
            height="2px"
            options={{
                showSpinner: false,
            }}
        >
            {children}
        </AppProgressProvider>
    );
}