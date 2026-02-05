import React from 'react';

export interface PromptSection {
    title: string;
    content: string;
    isPrompt?: boolean;
    description?: string; // Text to show after the prompt block
}

export interface ChannelItem {
    id: string;
    name: string;
    iconType: 'instagram' | 'telegram' | 'map' | 'search' | 'video' | 'shopping' | 'mail' | 'globe' | 'message';
    reason: string;
    color: string;
}

export interface GuideStep {
    id: number;
    title: string;
    subtitle: string;
    content: string | React.ReactNode;
    prompts?: PromptSection[];
    subTabs?: {
        label: string;
        content: string;
        channels?: ChannelItem[]; // New field for visual grid
        prompts: PromptSection[];
    }[];
}

export interface FAQItem {
    question: string;
    answer: string;
}

export interface Review {
    name: string;
    role: string;
    text: string;
}