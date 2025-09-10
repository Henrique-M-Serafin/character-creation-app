import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Eye, EyeIcon } from "lucide-react";
import type { Character } from "@/types";
import {
  calculateModifier,
} from "@/lib/calculateStats";
import { Button } from "./ui/button";

interface CharacterDetailsProps {
  character: Character;
  trigger?: React.ReactNode;
}

export function CharacterDetails({
  character,
  trigger,
}: CharacterDetailsProps) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <img
            src={character.image}
            alt={character.name}
          />
        </DialogContent>
      </Dialog>
      <Dialog>
        <DialogTrigger asChild>
          {trigger || (
            <button className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
              <Eye className="h-4 w-4" />
              View Details
            </button>
          )}
        </DialogTrigger>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
          <DialogHeader>
            <DialogTitle className=" text-2xl font-bold">
              {character.name}
            </DialogTitle>
            <DialogDescription className="flex justify-between items-center text-base">
              <p>
                {character.race} {character.class}
              </p>
              <Button
                onClick={() => setDialogOpen(true)}
                title="View photo"
                variant="ghost"
              >
                <EyeIcon />
              </Button>
            </DialogDescription>
          </DialogHeader>

          <ScrollArea className="flex gap-2 p-2 h-[70vh]">
            <div className="mb-2">
              {character.image && (
                <>
                  <div className="flex justify-center">
                    <img
                      src={character.image}
                      alt={character.name}
                      className="w-48 mb-2 rounded-lg object-cover border-2 border-border"
                    />
                  </div>
                  <Separator />
                </>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    Background
                  </p>
                  <p className="text-sm">{character.background}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    Alignment
                  </p>
                  <p className="text-sm">{character.alignment}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    Hit Points
                  </p>
                  <p className="text-sm font-bold text-primary">
                    {character.HP}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-muted-foreground">
                    Speed
                  </p>
                  <p className="text-sm">
                    {character.speed} ft
                  </p>
                </div>
              </div>
              <Separator />
              <div>
                <h3 className="text-lg font-semibold mb-4">Ability Scores</h3>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                  {Object.entries(character.attributes).map(
                    ([attribute, score]) => (
                      <div key={attribute} className="text-center space-y-1">
                        <p className="text-xs font-medium text-muted-foreground uppercase">
                          {attribute.slice(0, 3)}
                        </p>
                        <div className="bg-muted rounded-lg p-2">
                          <p className="text-lg font-bold">{score}</p>
                          <p className="text-sm text-muted-foreground">
                            {calculateModifier(score)}
                          </p>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>

              <Separator />

              {/* Equipment */}
              {character.equipment.length > 0 && (
                <>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Equipment</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {character.equipment.map((item, index) => (
                        <div
                          key={index}
                          className="text-sm bg-muted rounded p-2"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  <Separator />
                </>
              )}

              {/* Spells */}
              {character.spells.length > 0 && (
                <>
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Spells</h3>
                    <div className="flex flex-wrap gap-2">
                      {character.spells.map((spell, index) => (
                        <Badge key={index} variant="outline">
                          {spell}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Separator />
                </>
              )}

              {/* Backstory */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Backstory</h3>
                <div className="bg-muted/50 rounded-lg p-4">
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">
                    {character.backstory}
                  </p>
                </div>
              </div>

              <Separator />

              {/* Creation Date */}
              <div className="text-center text-sm text-muted-foreground">
                Created on {formatDate(character.createdAt)}
              </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
}
