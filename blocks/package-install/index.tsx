import { FileBlockProps } from "@githubnext/blocks";
import { Code, Tabs } from "@mantine/core";
import { Box } from "@primer/react";
import { Prism } from "@mantine/prism";

export default function(props: FileBlockProps) {
  // TODO: allow passed config
  const packageManagers = [
    { name: "brew", command: "brew install neovim" },
    { name: "yum", command: "yum install neovim" },
    { name: "apt", command: "apt-get install neovim" },
    { name: "winget", command: "winget install NeoVim.NeoVim" },
  ];

  return (
    <Box p={4}>
      <Tabs defaultValue="brew">
        <Tabs.List>
          {packageManagers.map((item) => (
            <Tabs.Tab value={item.name}>{item.name}</Tabs.Tab>
          ))}
        </Tabs.List>

        {packageManagers.map((item) => {
          return (
            <Tabs.Panel value={item.name} pt="xs">
              <Prism language="markdown">{item.command}</Prism> 
            </Tabs.Panel>
          );
        })}
      </Tabs>
    </Box>
  );
}
