import { EnvManager } from "#lib";
import { container } from "@sapphire/framework";

declare module "@sapphire/pieces" {
	interface Container {
		env: EnvManager;
	}
}

container.env = new EnvManager({
	overrideNodeEnv: true
});
