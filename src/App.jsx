import "./App.css";

import { Container, Section } from "@/shared/components";

import { Header, AddButton, ItemList } from "@/features/items";

import { Filter } from "@/features/filters";

function App() {
  return (
    <Container>
      <Header />

      <Section>
        <Filter />
      </Section>

      <Section>
        <AddButton />
      </Section>

      <Section>
        <ItemList />
      </Section>
    </Container>
  );
}

export default App;
