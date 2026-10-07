import * as React from "react";
import { createRoot, Root } from "react-dom/client";
import MiniDashboardComponent from "../components/MiniDashboardComponent";
import { SponsorTime } from "../types";
import Config from "../config";

export class MiniDashboard {
    private container: HTMLDivElement | null = null;
    private root: Root | null = null;
    private mounted = false;

    constructor() {
        this.mount = this.mount.bind(this);
    }

    public isMounted(): boolean {
        return this.mounted && this.container !== null && document.contains(this.container);
    }

    public mount(segments: SponsorTime[] = []): void {
        const secondaryInner = this.findSecondaryContainer();
        if (!secondaryInner) {
            return;
        }

        // If existing container already exists in DOM, just update
        let existingContainer = document.getElementById("sb-mini-dashboard-container") as HTMLDivElement | null;
        if (!existingContainer) {
            existingContainer = document.createElement("div");
            existingContainer.id = "sb-mini-dashboard-container";
            existingContainer.style.width = "100%";
            existingContainer.style.boxSizing = "border-box";

            // Insert as first child of secondary-inner, directly above the chips / recommendations
            if (secondaryInner.firstChild) {
                secondaryInner.insertBefore(existingContainer, secondaryInner.firstChild);
            } else {
                secondaryInner.appendChild(existingContainer);
            }
        }

        this.container = existingContainer;

        if (!this.root) {
            this.root = createRoot(this.container);
        }

        this.render(segments);
        this.mounted = true;
    }

    public update(segments: SponsorTime[] = []): void {
        if (!this.isMounted()) {
            this.mount(segments);
            return;
        }

        this.render(segments);
    }

    private render(segments: SponsorTime[]): void {
        if (!this.root) return;

        const totalMinutes = Config.config?.minutesSaved ?? 0;
        const totalSkips = Config.config?.skipCount ?? 0;

        this.root.render(
            <MiniDashboardComponent
                totalMinutesSaved={totalMinutes}
                totalSkips={totalSkips}
                segments={segments}
            />
        );
    }

    public destroy(): void {
        if (this.root) {
            this.root.unmount();
            this.root = null;
        }
        if (this.container && this.container.parentElement) {
            this.container.remove();
            this.container = null;
        }
        this.mounted = false;
    }

    private findSecondaryContainer(): HTMLElement | null {
        // Modern YouTube
        const secondaryInner = document.querySelector("#secondary-inner") as HTMLElement;
        if (secondaryInner) return secondaryInner;

        const secondary = document.querySelector("#secondary") as HTMLElement;
        if (secondary) return secondary;

        // Old layout
        const watch7 = document.querySelector("#watch7-sidebar-contents") as HTMLElement;
        if (watch7) return watch7;

        return null;
    }
}

export default MiniDashboard;
